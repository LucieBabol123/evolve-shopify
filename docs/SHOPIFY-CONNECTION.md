# Shopify Dev MCP and store access

Shopify's official Dev MCP server supplies Shopify documentation/API schemas and code validation. It does not sign into a merchant store, upload files or publish themes. It requires Node.js 18+ and no Shopify credentials to run.

Official instructions: https://shopify.dev/docs/apps/build/ai-toolkit
Package: https://www.npmjs.com/package/@shopify/dev-mcp

## Codex on your computer

Run in a terminal with Codex CLI and Node.js installed:

```sh
codex mcp add shopify-dev-mcp -- npx -y @shopify/dev-mcp@latest
codex mcp list
```

Restart/reconnect your Codex session as needed and verify the server's tools appear. Alternatively, merge the entry in `shopify-dev-mcp.toml` into your local Codex configuration. Do not replace an existing configuration blindly.

For clients using JSON MCP configuration (such as Cursor), merge the server entry from `shopify-dev-mcp.json` according to the client's MCP settings. VS Code uses a different `servers` configuration shape; follow Shopify's client-specific instructions instead of pasting this JSON unchanged.

These are configuration examples, not evidence that a server has been registered in this cloud chat. Adding configuration files to a repository does not attach tools to a running hosted session.

## Installing the section directly into Shopify

Store access is separate. Use Shopify CLI with authorized store access, or a supported authenticated theme-management connector. Supply the store's `.myshopify.com` address first; never paste a password or token into chat. Sign in through Shopify's official browser authentication flow when using CLI on your computer.

Work with a duplicate/unpublished Impulse 9.2.0 theme, pull its full source into a separate directory, and preserve all existing theme files/settings. Copy only this package's section and two assets into the pulled theme. Validate and push only these three files to the chosen draft theme. Preview the theme, add/configure the section, and connect the product metafields. Keep publication as a separate reviewed action.

This repository is a section package, not a complete Impulse theme. Do not upload it as a complete theme, and do not use a whole-theme push that could remove unrelated theme files. The current cloud chat has no registered Shopify MCP tools or authenticated store connection; that capability must be established before direct store changes can happen.

Shopify's Dev MCP release builds send telemetry; details and opt-out instructions are in the official package README. It can be disabled using `OPT_OUT_INSTRUMENTATION=true` in the MCP server environment.
