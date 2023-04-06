# README #

This README would normally document whatever steps are necessary to get your application up and running.


# Getting started

<!--toc:start-->
- [Getting started](#getting-started)
    - [Tech Stack and Libraries:](#tech-stack-and-libraries)
    - [Scripts:](#scripts)
      - [`npm run dev`](#npm-run-dev)
      - [`npm run build`](#npm-run-build)
      - [`npm run preview`](#npm-run-preview)
      - [`npm run lint`](#npm-run-lint)
      - [`npm run lint-fix`](#npm-run-lint-fix)
      - [`npm run translate`](#npm-run-translate)
    - [Translations](#translations)
    - [Tailwind](#TailwindCSS)
    - [vite.config.js](#viteconfigjs)
    - [ESLint](#eslint)
    - [Husky](#husky)
    - [Folder structure](#folder-structure)
    - [Things to Know](#things-to-know)
<!--toc:end-->



### Tech Stack and Libraries:
- React and TypeScript
- React Router Dom
- React Query
- axios api instance (branch - feat/api)
- i18next
- TailwindCSS (branch - feat/tailwind)
- i18next
- Vite, Eslint, Husky

### Scripts:

#### `npm run dev`

Starts the dev server.

#### `npm run build`

Build the app.

#### `npm run preview`

Launch the build app in a server for local preview.

#### `npm run lint`

Lint files.

#### `npm run lint-fix`

Fix all auto-fixable ESLint problems.

#### `npm run translate`

This command generates the `./src/i18n/locales/{locale}.json` files.

Don't manually add translations to `./src/i18n/locales/{locale}.json` files!


### Translations

The source of truth for the translations is this file:
`./scripts/translations.csv`

1. Run `npm run translate` and the translations will be generated.

> NOTE 1: if you have conflicts in the code, just rerun `npm run translate`, as the source of truth is always `./scripts/translations.csv`.

**How to remove translations?**

Do not remove them right away.
1. Mark the translation as @deprecated in the translation file. (put the string "@deprecated" somewhere in the translation file).
2. Remove all places in the code where the translation was used.
3. After the code was merged to `develop`, only then would be a good time to delete the translations from the file.

**Why don't delete translations right away?**

The front project has type-safety (the strings inside `t` are type-safe. `t("this_string_is_type_safe")`)
When working with a group of people or different branches, that can cause issues with TypeScript complaining that translations are missing, and the project cannot be compiled successfully.


### TailwindCSS

This project uses TailwindCSS.
Tailwind separate branch `feat/tailwind`, it is necessary merge with develop branch.

All configuration is in `tailwind.config.cjs`.

> NOTE: if you use https://github.com/tailwindlabs/tailwindcss-intellisense/ plugin. you can specify the following setting, to improve the DX experience:
```json
{
  "tailwindCSS.experimental.classRegex": [
    ["classNames\\(([^)]*)\\)", "'([^']*)'"]
  ]
}
```
### vite.config.js

Configures Vite to support TypeScript path aliases, adds support for SVGR to enable use of SVG's as in a Create React App, add's "vite-plugin-checker" that spans a new process to run type checking.

### ESLint

ESLint is used to lint and format the code.

### Husky

Husky is used to:
- verify that all test pass before the code gets committed.
- verify that all code is formatted according to the ESLint rules before the code gets committed.
- validate the format of a commit message:
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
See the list of valid "type" types in `commitlint.config.cjs`.
Example of valid messages:
```
fix(FUN-112): Use Big.js in order to have precise rounding
fix: Use Big.js in order to have precise rounding
```


### Folder structure

```
├── dist
│    └── This folder is generated when `npm run build` is run.
├── public
│    └── Contains public assets.
├── scripts
│    └── Contains scripts for translations.
├── src
│   ├── assets
│   ├── components
│   │    └── Contains reusable components.
│   ├── context
│   │    └── Contains contexts components.
│   ├── css
│   │    └── Contains css files.
│   ├── hooks
│   │    └── Contains hooks files.
│   ├── http
│   │    └── Contains axios instances.
│   ├── i18n
│   │    └── locales
│   │        └── Contains autogenerated files.
│   ├── pages
│   │    ├── SomePage
│   │    │      └── SomePage.tsx
│   │    └── SomeOtherPage
│   │           ├── components
│   │           │    └── Contains components that are not reusable, but strictly tied to a page.
│   │           └── SomeOtherPage.tsx
│   ├──  router
│   │   
│   └──  types
|
|
├── package.json
├── prettierrc.json - Prettier Configuration.
├── postcss.config.cjs - Postcss Configuration required for Tailwind.
├── tailwind.config.cjs - Tailwind Configuration.
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts - Vite Configuration.
```

### Things to Know
- `npm` is the default package manager.
- When exporting Page components, make sure to export as default, because routes are lazy load.
