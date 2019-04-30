# eslint-plugin-import bug with TypeScript - demo repo

The problem I have: I get an `import/no-unresolved` error when I try to import types from `@types/*` definitions.

Importing anything else works fine but as soon as I want to `import { Type } from 'whatever'` I run into an `import/no-unresolved` error.

## Reproduce

-   clone this repo
-   run `npm install`
-   run `npm run lint` (or `npm run lint:debug` for more info)
