# Project Plan

## Fase 0

- [x] Brainstorming
  - [x] /analyst *brainstorm "Explore and refine the customer journeys"
- [x] Research
  - [x] /analyst *research "User Journey Mapping for an online cigar store"
- [x] Product Brief
  - [x] /analyst *product-brief "Read the brainstorming session, the research session and the @proposal.md file, and create a product brief for the project."

## Fase 1

- [ ] Planning
  - [x] /run-agent-task pm *prd
  - [x] /run-agent-task pm *validate-prd
  - [x] /run-agent-task ux-designer *create-ux-design "Read PRD and epics documents and create UX design specification file"
  - [x] /run-agent-task ux-designer *validate-ux-design "Read UX design specification and validate the content"
  - [ ] /run-agent-task tea *framework {prompt / user-input-file}
  - [ ] /run-agent-task tea *ci {prompt / user-input-file}
  - [ ] /run-agent-task tea *test-design {prompt / user-input-file}

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
