# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this repository, please report it privately rather than opening a public issue.

- Open a [GitHub Security Advisory](../../security/advisories/new) on this repository, or
- Contact the maintainer directly through the GitHub profile: [@BlakeAltman-Crypto](https://github.com/BlakeAltman-Crypto)

Please include a clear description, reproduction steps, and potential impact. We aim to acknowledge reports promptly and will credit responsible disclosure unless you prefer to remain anonymous.

## Scope

This is an early-stage (alpha) educational project. There are currently no wallet integrations, no custody of funds, no private key handling, and no trading execution — which significantly limits the security-sensitive surface area. As the project grows, this policy will be expanded accordingly.

## Secrets & Credentials

No API keys, credentials, or secrets should ever be committed to this repository. `.env` and similar files are gitignored by default.
