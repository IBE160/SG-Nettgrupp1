# Project Plan

## Fase 0

- [x] Brainstorming
  - [x] /analyst *brainstorm "Read the proposal: /docs/proposal.md, Brainstorm to define the customer journeys."
- [x] Research
  - [x] /analyst *research "Read the proposal: /docs/proposal.md, Perform reasearch into user journey mapping."
- [x] Product Brief
  - [x] /analyst *product-brief "Read the brainstorming session, the research session and the proposal: /docs/brainstorming-session-results-2025-10-24.md, /docs/research-user-2025-10-29.md, proposal.md and create a product brief for the project."

## Fase 1

- [x] Planning
  - [x] /run-agent-task pm *prd "Read the product brief: /docs/product-brief-ibe160-2025-11-03.md and create a Product Requirements Document for the project".
  - [x] /run-agent-task pm *validate-prd "Read the PRD: /docs/PRD.md and validate the content of the document."
  - [x] /run-agent-task ux-designer *create-design "Read PRD and epics documents: /docs/PRD.md, /docs/epics.md and create UX design specifications."
  - [x] /run-agent-task ux-designer *validate-design "Read UX design specifications: /docs/ux-design-specification.md and validate the content."
  - [x] /run-agent-task tea *framework "Initialize production-ready test framework architecture"
  - [x] /run-agent-task tea *ci "Scaffold CI/CD quality pipeline"
  - [x] /run-agent-task tea *test-design "Full test design for Epics 1-3 "

## Fase 2

- [ ] Solutioning
  - [ ] /run-agent-task architect *architecture {prompt / user-input-file}
  - [ ] /run-agent-task architect *validate-architecture {prompt / user-input-file}

## Fase 3

- [ ] Implementation
  - [ ] /run-agent-task sm *sprint-planning {prompt / user-input-file}
  - foreach epic in sprint planning:
    - [ ] /run-agent-task sm epic-tech-content {prompt / user-input-file}
    - [ ] /run-agent-task sm validate-epic-tech-content {prompt / user-input-file}
    - foreach story in epic:
      - [ ] /run-agent-task sm *create-story {prompt / user-input-file}
      - [ ] /run-agent-task sm *validate-create-story {prompt / user-input-file}
      - [ ] /run-agent-task sm *story-context {prompt / user-input-file}
      - [ ] /run-agent-task sm *validate-story-context {prompt / user-input-file}
      - [ ] /run-agent-task tea *validate-story-ready {prompt / user-input-file}
      - [ ] /run-agent-task dev *implement-story {prompt / user-input-file}
      - [ ] /run-agent-task dev *validate-story {prompt / user-input-file}
      - [ ] /run-agent-task tea *automate {prompt / user-input-file}
      - [ ] /run-agent-task tea *test-review {prompt / user-input-file}
    - [ ] /run-agent-task sm *retrospective {prompt / user-input-file}
