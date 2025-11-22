# Project Plan

## Instruksjoner

1. Der hvor det står {prompt / user-input-file}, kan dere legge inn en egen prompt eller filnavn for å gi ekstra instruksjoner. Hvis dere ikke ønsker å legge til ekstra instruksjoner, kan dere bare fjerne denne delen.
2. Hvis jeg har skrevet noe der allerede, f.eks. "Root Cause Analysis and Solution Design for Player Inactivity", så kan dere bytte ut min prompt med deres egen.


## Fase 0

- [x] /run-agent-task analyst *workflow-init
  - [x] File: bmm-workflow-status.yaml
- [x] Brainstorming
  - [x] /run-agent-task analyst *brainstorm
    - [x] File: brainstorming-session-results-date.md
  - [x] /run-agent-task analyst *brainstorm
    - [x] File: brainstorming-session-results-date.md
  - [x] /run-agent-task analyst *brainstorm
    - [x] File: brainstorming-session-results-date.md
- [x] Research
  - [x] /run-agent-task analyst *research
    - [x] File: research-technical-date.md
- [x] Product Brief
  - [x] /run-agent-task analyst *product-brief
    - [x] File: product-brief.md

## Fase 1

- [x] Planning
  - [x] /run-agent-task pm *prd
    - [x] File: PRD.md
  - [x] /run-agent-task pm *validate-prd
    - [x] File: validation-report-date.md
  - [x] /run-agent-task ux-designer *create-ux-design
    - [x] File: ux-design-specification.md
    - [x] File: ux-color-themes.html
    - [x] File: ux-design-directions.html
  - [x] /run-agent-task ux-designer *validate-ux-design
    - [x] File: validation-report-2025-11-13.md

## Fase 2

- [x] Solutioning
  - [x] /run-agent-task architect *create-architecture
    - [x] File: architecture.md
  - [x] /run-agent-task pm *create-epics-and-stories
    - [x] File: epics.md
  - [x] /run-agent-task tea *test-design
  - [x] /run-agent-task architect *solutioning-gate-check
    - [x] File: validation-report-macro-level-solutioning-2025-11-21.md

## Fase 3

- [ ] Implementation
  - [x] /run-agent-task sm *sprint-planning
    - [x] File: sprint-artifacts/sprint-status.yaml
  - foreach epic in sprint planning:
    - [x] /run-agent-task sm create-epic-tech-context {prompt / user-input-file}
      - [x] File: .bmad-ephemeral/stories/tech-spec-epic-1.md
      - [x] File: .bmad-ephemeral/stories/tech-spec-epic-2.md
      - [x] File: .bmad-ephemeral/stories/tech-spec-epic-3.md
    - [x] /run-agent-task sm validate-epic-tech-context {prompt / user-input-file}
      - [x] File: validation-report-epic-1-2025-11-20.md
      - [x] File: validation-report-epic-2-2025-11-20.md
      - [x] File: validation-report-epic-3-2025-11-20.md
    - foreach story in epic:
      - [x] /run-agent-task sm *create-story {prompt / user-input-file}
        - [x] File: .bmad-ephemeral/stories/1-1-basic-project-infrastructure-setup.md
        - [x] File: .bmad-ephemeral/stories/1-2-product-data-model-and-database-initialization.md
        - [x] File: .bmad-ephemeral/stories/1-3-admin-interface-for-basic-product-management.md
        - [x] File: .bmad-ephemeral/stories/1-4-landing-page-navigation-to-products-page.md
        
      - [x] /run-agent-task sm *validate-create-story {prompt / user-input-file}
      - [x] /run-agent-task sm *create-story-context {prompt / user-input-file}
        - [ ] File: sprint-artifacts/{{story_key}}.context.xml
      - [x] /run-agent-task sm *validate-story-context {prompt / user-input-file}
      - [x] /run-agent-task sm *story-ready-for-dev {prompt / user-input-file}
      while code-review != approved:
        - [ ] /run-agent-task dev *develop-story {prompt / user-input-file}
        - [ ] /run-agent-task dev *code-review {prompt / user-input-file}
      - [ ] /run-agent-task dev *story-done {prompt / user-input-file}
      (Denne har vi gjort på de to første stories)
      - [ ] /run-agent-task sm *test-review {prompt / user-input-file}
    - [ ] /run-agent-task sm *epic-retrospective {prompt / user-input-file}





## BMAD workflow

<img src="images/bmad-workflow.svg" alt="BMAD workflow">