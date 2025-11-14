# CI Secrets Checklist

This document outlines the required secrets for your CI/CD pipeline and best practices for their management.

## Required Secrets

The following secrets may be required depending on your pipeline configuration:

-   `SLACK_WEBHOOK`: (Optional) Webhook URL for Slack notifications.
-   `NPM_TOKEN`: (Optional) npm token for publishing private packages or accessing private registries.
-   `DOCKER_USERNAME`: (Optional) Docker username for pushing/pulling images from private registries.
-   `DOCKER_PASSWORD`: (Optional) Docker password for pushing/pulling images from private registries.
-   `API_KEY`: (Optional) API key for external services used in tests or deployments.
-   `DATABASE_URL`: (Optional) Database connection string for seeding test data.

## Where to Configure in CI Platform

### GitHub Actions

1.  Go to your repository on GitHub.
2.  Navigate to **Settings** > **Secrets and variables** > **Actions**.
3.  Click **New repository secret** to add each secret.

### GitLab CI

1.  Go to your project on GitLab.
2.  Navigate to **Settings** > **CI/CD** > **Variables**.
3.  Click **Add variable** to add each secret.

### Circle CI

1.  Go to your project on CircleCI.
2.  Navigate to **Project Settings** > **Environment Variables**.
3.  Click **Add Variable** to add each secret.

## Security Best Practices

-   **Never hardcode secrets**: Always use environment variables or secret management features provided by your CI platform.
-   **Least privilege**: Grant only the necessary permissions to your CI/CD pipeline.
-   **Rotate secrets**: Regularly change your secrets to minimize the risk of compromise.
-   **Audit access**: Monitor who has access to your secrets and when they are used.
-   **Encrypt secrets**: Ensure secrets are encrypted at rest and in transit.
-   **Avoid logging secrets**: Be careful not to print secrets to build logs.
