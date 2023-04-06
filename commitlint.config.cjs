// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "@commitlint/config-conventional" // scoped packages are not prefixed
  ],

  "type-enum": [
    "build",
    "chore",
    "ci",
    "docs",
    "feat",
    "fix",
    "perf",
    "refactor",
    "revert",
    "style",
    "test",
  ]
}