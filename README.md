# Sample repo to reproduce the issue

Added 2 files; a test.js and README .md

1. Installed eslint extension(`dbaeumer.vscode-eslint`)

2. Install eslint using npm `npm install eslint`

3. Added eslint extension related settings in the [`code-worksdpace`] json
   
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  },
  "eslint.useFlatConfig": true,
  "eslint.validate": ["mdx", "javascript", "typescript"],
  "eslint.options": {
    "extensions": [".js", ".md"]
  }
}
```

4. Use `Ctrl+S` on markdown or js file
5. Open the _Output_ Panel in Bottom
6. Select _EsLint_ and _Extension Host(Remote)_ section from right side drop down

below are the logs

### in `Extension Host(Remote)` section

```log
- 'extensions' has been removed.
    at ae (/home/codespace/.vscode-remote/extensions/dbaeumer.vscode-eslint-3.0.10/client/out/extension.js:1:41596)
    at re (/home/codespace/.vscode-remote/extensions/dbaeumer.vscode-eslint-3.0.10/client/out/extension.js:1:39556)
    at Immediate.<anonymous> (/home/codespace/.vscode-remote/extensions/dbaeumer.vscode-eslint-3.0.10/client/out/extension.js:1:35850)
    at processImmediate (node:internal/timers:483:21)
```

## in `Eslint` Section

```log
[Error - 8:20:37 AM] An unexpected error occurred:
[Error - 8:20:37 AM] Error: Invalid Options:
- Unknown options: extensions
- 'extensions' has been removed.
    at processOptions (/workspaces/test/node_modules/eslint/lib/eslint/eslint-helpers.js:847:15)
    at new ESLint (/workspaces/test/node_modules/eslint/lib/eslint/eslint.js:447:34)
    at O (/home/codespace/.vscode-remote/extensions/dbaeumer.vscode-eslint-3.0.10/server/out/eslintServer.js:1:19181)
    at async M (/home/codespace/.vscode-remote/extensions/dbaeumer.vscode-eslint-3.0.10/server/out/eslintServer.js:1:19777)
```

Hope it will help.

Thanks,
Keshav
