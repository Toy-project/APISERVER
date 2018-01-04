module.exports = {
  "extends": "airbnb",
  "root": true,
  "env": {
    "node": true,
    "es6": true,
  },
  "rules": {
    "indent": ["error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }, "MemberExpression": 0 }],
    "quotes": ["error", "single"],
    "no-console": "warn",
    "func-names": ["error", "never"],
    "max-len": [2, 150, 4, {"ignoreUrls": true}],
    "no-unused-vars": ["warn", { "args": "none" }],
    "no-unused-expressions": ["error", { "allowTernary": true }],
  }
};