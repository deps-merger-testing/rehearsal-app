const assert = require("node:assert");
const _ = require("lodash");
const semver = require("semver");
assert.deepStrictEqual(_.chunk([1, 2, 3], 2), [[1, 2], [3]]);
assert.ok(semver.gt("1.2.3", "1.2.0"));
console.log("ok");
