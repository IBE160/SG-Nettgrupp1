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
      - [x] File: docs/validation-report-epic-1-2025-11-20.md
      - [x] File: docs/validation-report-epic-2-2025-11-20.md
      - [x] File: docs/validation-report-epic-3-2025-11-20.md
    - foreach story in epic:
      - [x] /run-agent-task sm *create-story {prompt / user-input-file}
        - [x] File: .bmad-ephemeral/stories/1-1-basic-project-infrastructure-setup.md
        - [x] File: .bmad-ephemeral/stories/1-2-product-data-model-and-database-initialization.md
        - [x] File: .bmad-ephemeral/stories/1-3-admin-interface-for-basic-product-management.md
        - [x] File: .bmad-ephemeral/stories/1-4-landing-page-navigation-to-products-page.md
        - [x] File: .bmad-ephemeral/stories/1-5-landing-page-navigation-to-products-page.md
        - [x] File: .bmad-ephemeral/stories/1-6-landing-page-navigation-to-products-page.md
        - [x] File: .bmad-ephemeral/stories/1-7-landing-page-navigation-to-products-page.md
        - [x] File: .bmad-ephemeral/stories/2-1-add-products-to-shopping-cart.md
        - [x] File: .bmad-ephemeral/stories/2-2-manage-shopping-cart-contents.md
        - [x] File: .bmad-ephemeral/stories/2-3-customer-checkout-process.md
        - [x] File: .bmad-ephemeral/stories/2-4-order-confirmation-and-store-notification.md
        - [x] File: .bmad-ephemeral/stories/2-5-admin-view-new-orders.md
        - [x] File: .bmad-ephemeral/stories/2-6-admin-mark-order-as-prepared.md
        - [x] File: .bmad-ephemeral/stories/2-7-admin-cancel-order.md
        - [x] File: .bmad-ephemeral/stories/3-1-admin-edit-full-product-details.md
        - [x] File: .bmad-ephemeral/stories/3-2-admin-archive-product.md
        - [x] File: .bmad-ephemeral/stories/3-3-admin-update-product-stock-levels.md
        - [x] File: .bmad-ephemeral/stories/3-4-admin-delete-order.md
      - [x] /run-agent-task sm *validate-create-story {prompt / user-input-file}
        - [x] File: docs/validation-report-story-1-1.md
        - [x] File: docs/validation-report-story-1-2.md
        - [x] File: docs/validation-report-story-1-3.md
        - [x] File: docs/validation-report-story-1-4.md
        - [x] File: docs/validation-report-story-1-5.md
        - [x] File: docs/validation-report-story-1-6.md
        - [x] File: docs/validation-report-story-1-7.md
        - [x] File: docs/validation-report-story-2-1.md
        - [x] File: docs/validation-report-story-2-2.md
        - [x] File: docs/validation-report-story-2-3.md
        - [x] File: docs/validation-report-story-2-4.md
        - [x] File: docs/validation-report-story-2-5.md
        - [x] File: docs/validation-report-story-2-6.md
        - [x] File: docs/validation-report-story-2-7.md
        - [x] File: docs/validation-report-story-3-1.md
        - [x] File: docs/validation-report-story-3-2.md
        - [x] File: docs/validation-report-story-3-3.md
        - [x] File: docs/validation-report-story-3-4.md
  - [x] /run-agent-task sm *create-story-context {prompt / user-input-file}
        - [x] File: .bmad-ephemeral/stories/1-1-basic-project-infrastructure-setup.context.xml
        - [x] File: .bmad-ephemeral/stories/1-2-product-data-model-and-database-initialization.context.xml
        - [x] File: .bmad-ephemeral/stories/1-3-admin-interface-for-basic-product-management.context.xml
        - [x] File: .bmad-ephemeral/stories/1-4-landing-page-navigation-to-products-page.context.xml
        - [x] File: .bmad-ephemeral/stories/1-5-landing-page-navigation-to-products-page.context.xml
        - [x] File: .bmad-ephemeral/stories/1-6-landing-page-navigation-to-products-page.context.xml
        - [x] File: .bmad-ephemeral/stories/1-7-landing-page-navigation-to-products-page.context.xml
        - [x] File: .bmad-ephemeral/stories/2-1-add-products-to-shopping-cart.context.xml
        - [x] File: .bmad-ephemeral/stories/2-2-manage-shopping-cart-contents.context.xml
        - [x] File: .bmad-ephemeral/stories/2-3-customer-checkout-process.context.xml
        - [x] File: .bmad-ephemeral/stories/2-4-order-confirmation-and-store-notification.context.xml
        - [x] File: .bmad-ephemeral/stories/2-5-admin-view-new-orders.context.xml
        - [x] File: .bmad-ephemeral/stories/2-6-admin-mark-order-as-prepared.context.xml
        - [x] File: .bmad-ephemeral/stories/2-7-admin-cancel-order.context.xml
        - [x] File: .bmad-ephemeral/stories/3-1-admin-edit-full-product-details.context.xml
        - [x] File: .bmad-ephemeral/stories/3-2-admin-archive-product.context.xml
        - [x] File: .bmad-ephemeral/stories/3-3-admin-update-product-stock-levels.context.xml
        - [x] File: .bmad-ephemeral/stories/3-4-admin-delete-order.context.xml
      - [x] /run-agent-task sm *validate-story-context {prompt / user-input-file}
        - [x] File: docs\validation-report-story-context-1-1.md
        - [x] File: docs\validation-report-story-context-1-2.md
        - [x] File: docs\validation-report-story-context-1-3.md
        - [x] File: docs\validation-report-story-context-1-4.md
        - [x] File: docs\validation-report-story-context-1-5.md
        - [x] File: docs\validation-report-story-context-1-6.md
        - [x] File: docs\validation-report-story-context-1-7.md
        - [x] File: docs\validation-report-story-context-2-1.md
        - [x] File: docs\validation-report-story-context-2-2.md
        - [x] File: docs\validation-report-story-context-2-3.md
        - [x] File: docs\validation-report-story-context-2-4.md
        - [x] File: docs\validation-report-story-context-2-5.md
        - [x] File: docs\validation-report-story-context-2-6.md
        - [x] File: docs\validation-report-story-context-2-7.md
        - [x] File: docs\validation-report-story-context-3-1.md
        - [x] File: docs\validation-report-story-context-3-2.md
        - [x] File: docs\validation-report-story-context-3-3.md
        - [x] File: docs\validation-report-story-context-3-4.md
      - [x] /run-agent-task sm *story-ready-for-dev {prompt / user-input-file}
      while code-review != approved:
        - [ ] /run-agent-task dev *develop-story {prompt / user-input-file}
        <!--
        1-1 done
        1-2 done
        1-3 done
        1-4 in progress
        1-5 done
        1-6 done
        1-7 done
        2-1 completed
        2-2 done
        2-3 done
        2-4
        2-5
        2-6
        2-7
        3-1
        3-2
        3-3
        3-4
        -->
        - [ ] /run-agent-task dev *code-review {prompt / user-input-file}
    - [ ] /run-agent-task sm *test-review {prompt / user-input-file}
    - [ ] /run-agent-task sm *epic-retrospective {prompt / user-input-file}





## BMAD workflow

<img src="images/bmad-workflow.svg" alt="BMAD workflow">