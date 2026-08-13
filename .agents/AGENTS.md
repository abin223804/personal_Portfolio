# AGENTS.md — Repository Operating Rules

## PROJECT.md Continuous Architecture Maintenance Rule

`PROJECT.md` at the root of this project is the **single source of truth for the codebase architecture, modules, technologies, data flows, APIs, configuration, and implementation decisions**.

### Mandatory Workflow:
Whenever any code modification affects system architecture, routes, schemas/models, dependencies, APIs, configuration, workflows, or business logic:
1. **Source of Truth Priority**: Treat actual source code and configuration files as the primary ground truth.
2. **Synchronize PROJECT.md**: Immediately update `PROJECT.md` in the same task to reflect the exact new state of the codebase.
3. **Architecture Change Log**: Append an entry under `## 18. Architecture Change Log` specifying the date, added/changed/removed items, and technical rationale.
4. **Prevent Documentation Drift**: Ensure `PROJECT.md` never describes outdated or missing architecture.
