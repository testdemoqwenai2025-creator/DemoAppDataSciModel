# Agent-Queryable Data Layer for Talent & Opportunity Matching

> **A vision document for client conversations.**
> This is not a feature page on the DSModelPro platform — it is a consulting-proposal artefact. When a client asks about talent analytics, AI agents, or recommendation systems, this is the document to send.

---

## The vision

> *To create a future where technology helps every individual to understand their strengths, interests and unique abilities, and to connect with opportunities where they can thrive — because more people doing things they love leads to a better, happier and more productive world.*

This vision is not an HR initiative. It is a **data engineering and AI architecture** challenge. The technical question is not "how do we build a dashboard" — Eightfold, Gloat, and Workday already do that. The technical question is: **how do we build a data layer that AI agents can query directly, so that matching becomes a governed, auditable, bias-checked conversation between an agent and a warehouse — not a black-box recommendation?**

---

## Why this is different from existing talent platforms

| Existing platforms (Eightfold, Gloat, Workday) | DSModelPro's agent-queryable layer |
|---|---|
| Dashboards for **humans** | API for **AI agents** |
| Black-box match scores | Governed, explainable match scores with counterfactual evidence |
| No audit trail for "why was this recommended?" | Every agent query logged to `fact_agent_query` with bias-check results |
| Bias detection is an afterthought (if present) | Bias checks are architectural — statistical parity + disparate-impact run on every query |
| Skills taxonomy is a flat list | Skills taxonomy is a **graph dimension** with hierarchy, "requires", "related-to" edges |
| Thriving is a single metric | Thriving is a **composite SCD2 fact** — engagement + performance + retention, tracked over time |
| No counterfactual capability | Three counterfactual endpoints: match injection, cohort comparison, bias audit |

---

## The dimensional model

```
dim_entity          — one row per individual (id, consent tier, protected attrs for bias checks)
dim_skill           — graph dimension (skill_id, name, parent_id, edge_type: broader/requires/related)
dim_assessment      — one row per assessment instrument (strengths-finder, interest inventory)
dim_opportunity     — one row per opportunity (role, team, project, requirements as JSONB)
dim_organisation    — one row per org/team (the supply side of opportunities)

fact_assessment_score — grain: entity × assessment × skill × time (SCD2 — skills evolve)
fact_match            — grain: entity × opportunity × time (match_score, matched_by, match_method)
fact_outcome          — grain: entity × opportunity × snapshot_date (thriving_score, retained, performance)
fact_agent_query      — grain: agent × query × time (audit trail for every agent interaction)
```

### Key design decisions

1. **Skills as a graph, not a list.** A flat `dim_skill` table breaks on day one — "Python" the language vs "Python" the snake, "Leadership" meaning different things in different contexts, skills that require other skills. The graph dimension supports `broader-than`, `narrower-than`, `requires`, and `related-to` edges. This is the same pattern DSModelPro uses for taxonomic graphs with horizontal gene transfer in the biology domain.

2. **Thriving as a fact, not a dimension attribute.** Thriving changes over time, so storing it on `dim_entity` would lose history (or require SCD2 on the dimension, which is an anti-pattern for a slowly-changing metric). Instead, `fact_outcome` is a periodic snapshot — one row per entity × opportunity × month — capturing the thriving trajectory. This supports "did the match lead to thriving?" queries with full historical context.

3. **Agent queries as a fact table.** This is unusual but essential. The vision explicitly calls agents "first-class consumers." Logging every agent query to `fact_agent_query` provides: (a) audit trail for regulators, (b) agent-behaviour analytics (what do agents ask most? where do they fail?), (c) bias-detection evidence (were biased results blocked or returned?), (d) reproducibility (agent version + query plan + result summary).

4. **Consent and GDPR as architectural.** Talent data is personal data. `dim_entity.consent_tier` (0=anonymous, 1=aggregated, 2=identified) is enforced by the data contract — agents cannot return individual-level results when consent tier < 2. Protected attributes (gender, ethnicity, age band) are stored but only accessible via bias-check endpoints, never directly queryable.

---

## The agent-queryable architecture — five layers

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Agent                                                       │
│     Declares intent: "Recommend 3 opportunities for person X,   │
│     with evidence."                                             │
└──────────────────────────┬──────────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│  2. Data Contract (machine-readable YAML)                       │
│     Validates: grain, consent, allowed metrics, prohibitions.   │
│     Rejects invalid queries before they reach the warehouse.    │
└──────────────────────────┬──────────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│  3. Semantic API                                                │
│     Translates intent → governed query plan.                    │
│     No raw SQL — structured metric definitions.                 │
└──────────────────────────┬──────────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│  4. Bias Hooks                                                  │
│     Statistical parity check, disparate-impact ratio (80% rule).│
│     Blocks biased results before return.                        │
└──────────────────────────┬──────────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│  5. Audit Log → fact_agent_query                                │
│     Logs: agent_id, query_intent, query_plan, result_summary,   │
│     bias_check_result, timestamp. 7-year retention.             │
└─────────────────────────────────────────────────────────────────┘
```

### Why agents should NOT write SQL directly

When an AI agent writes its own SQL against a warehouse, three things go wrong:

1. **Wrong grain** — it sums a semi-additive balance across time, or joins a snapshot fact to a transaction fact. The data contract prevents this by declaring valid grains per metric.

2. **Consent violations** — it queries protected attributes the human user isn't authorised to see. The data contract enforces consent tiers and blocks direct access to protected attributes.

3. **No audit trail** — there's no record of what the agent asked, why, or whether the answer was biased. `fact_agent_query` captures every interaction.

The fix is not "better prompt engineering." The fix is a **machine-readable data contract** that sits between the agent and the warehouse. The agent declares what it wants. The contract validates, enforces, checks, logs, and returns a structured answer. The agent never touches SQL.

---

## Counterfactual endpoints — the novel capability

A human dashboard shows what happened. An agent needs to know what *would* happen under different assumptions. The semantic API exposes three counterfactual endpoints:

### 1. `/counterfactual/match` — hypothetical skill injection
> *"If person X had skill Y, what opportunities would they match?"*

Injects a hypothetical skill into the entity's profile and re-runs the match score. Returns the delta in match scores across all opportunities. Use case: career-pathing conversations ("if you learned Python, these 5 roles would open up").

### 2. `/counterfactual/cohort` — causal match-quality analysis
> *"Did the matched cohort thrive more than the unmatched cohort?"*

Propensity-scored counterfactual with confidence interval. Compares thriving scores for matched vs unmatched cohorts, controlling for confounders. Returns: thriving uplift (%), 95% CI, p-value, cohort sizes. Use case: measuring whether the matching algorithm actually works.

### 3. `/counterfactual/bias` — fairness audit
> *"Would the top-3 recommendations change if protected attributes were removed?"*

Re-runs the matching model with protected attributes masked. Compares the top-3 recommendations with and without protected attrs. Returns: recommendation overlap (%), changed recommendations, bias risk assessment. Use case: proving to regulators that the matching algorithm is fair.

Each endpoint returns a structured JSON answer with confidence intervals, the query plan that produced it, and a bias-check result. The agent can cite the evidence — *"I recommend these 3 opportunities because the counterfactual cohort analysis shows a 23% thriving uplift (95% CI: 14-31%)"* — rather than asserting a recommendation without justification.

---

## Bias detection — architectural, not bolted-on

Two bias checks run automatically on every agent query:

### Statistical parity
Match score distribution must not differ by more than 10% across protected attributes (gender, ethnicity, age band). If it does, the result is blocked and flagged in `fact_agent_query`.

### Disparate impact (80% rule)
The selection rate for any protected group must be at least 80% of the selection rate for the highest-selected group. This is the EEOC's standard for employment discrimination. If violated, the result is blocked.

These checks are not optional. They are architectural — the semantic API cannot return a result without running them. This is the table regulators will ask for during an audit.

---

## How this maps to the data-engineering spec

| Spec requirement | How DSModelPro delivers |
|---|---|
| **Core data modelling** | 5 dimensions + 4 fact tables, with the skills graph and SCD2 outcome fact as the hard parts |
| **Modelling at source** | The data contract is defined in the product codebase — agents read it before querying. Data is structured correctly from the start. |
| **Pipelines** | Match-scoring pipeline, outcome-snapshot pipeline, agent-query-logging pipeline. All built on the existing Prefect/Nextflow templates. |
| **Self-serve platform** | The semantic API IS the self-serve layer — agents (and humans via the API) answer their own questions without coming to data engineering. |
| **Agents as first-class consumers** | This is the core architectural innovation. Agents query the contract, not the warehouse. |
| **Metrics that matter** | Acquisition → activation → match quality → thriving → commercial performance. Each maps to a fact table. |
| **Answers, not just queries** | Counterfactual endpoints turn ambiguous questions ("are we matching well?") into governed causal answers with confidence intervals. |
| **Standards** | Data contract = the standard for data quality, definitions, and instrumentation. Bias checks = the standard for fairness. |

---

## Commercial positioning

When a client asks *"can your platform support AI agents?"*, the answer is not *"yes, we have a chatbot that writes SQL."* The answer is:

> *"Yes. We have a machine-readable data contract that agents consume before querying. The contract enforces grain, consent, and metric definitions. A semantic API translates agent intent into governed query plans — agents never write SQL. Bias checks (statistical parity + disparate impact) run automatically on every query. Every agent interaction is logged to an audit fact table with 7-year retention. And three counterfactual endpoints let agents answer 'what if?' questions with confidence intervals, not black-box assertions."*

That is a materially different and stronger answer than any talent platform on the market today.

---

## Why this matters now

Within 2-3 years, most analytical work will be agent-initiated, not human-initiated. The platforms that win will be the ones with a governed agent-query layer — not the ones with the prettiest dashboard. DSModelPro's agent-queryable pattern is the architectural answer to that shift.

The talent-and-opportunity matching use case is the worked example, but the pattern applies to every domain where an agent needs to make a recommendation with evidence:
- **Clinical trials** — agent recommends trials for a patient, with counterfactual evidence
- **Marketplace** — agent recommends products for a buyer, with bias-checked fairness
- **Mentor matching** — agent recommends mentors for a mentee, with thriving-trajectory evidence
- **Financial advisory** — agent recommends investments for a client, with risk-adjusted counterfactuals

The vision — "more people doing things they love" — is the human framing. The architecture — agent-queryable data layer with governed contracts and counterfactual endpoints — is the technical framing. Both are needed. The vision wins the conversation; the architecture wins the engagement.

---

## Next steps for a client engagement

1. **Discovery (2 weeks)** — map the client's existing talent data (HRIS, assessments, performance reviews) to the dimensional model. Identify the skills taxonomy source and the thriving-metric inputs.

2. **Contract design (1 week)** — write the `agent_data_contract.yaml` for the client's specific entities, opportunities, and metrics. Define consent tiers, protected attributes, and bias-check thresholds.

3. **Pipeline build (4-6 weeks)** — deploy the match-scoring, outcome-snapshot, and agent-query-logging pipelines using the existing DSModelPro templates (Prefect/Nextflow + warehouse SQL).

4. **Semantic API (3-4 weeks)** — implement the five-layer architecture. The API is the novel part — it needs the contract validator, the query planner, the bias hooks, and the audit logger.

5. **Agent integration (2-3 weeks)** — connect the client's AI agents (or build new ones) to the semantic API. Agents read the contract, declare intent, and receive governed answers.

6. **Counterfactual endpoints (2-3 weeks)** — implement the three counterfactual endpoints. This is the data-science-heavy part — propensity scoring, cohort matching, confidence intervals.

**Total: 14-19 weeks for a production deployment.**

---

*This document is a consulting-proposal artefact, not a platform feature page. It lives in `/download/` on DSModelPro and is shared with clients who ask about talent analytics, AI agents, or recommendation systems. The technical implementation patterns are demonstrated on the `/fact-tables/` page under "Pattern: Entity-opportunity matching" and "Advanced: Agent-queryable data layer."*
