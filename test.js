const assert = require("node:assert");
const _ = require("lodash");
const semver = require("semver");
const qs = require("qs");
const { settings } = require("./src/config");

assert.deepStrictEqual(_.chunk([1, 2, 3], 2), [[1, 2], [3]]);
assert.ok(semver.gt("1.2.3", "1.2.0"));
assert.strictEqual(qs.stringify({ a: [1, 2] }, { arrayFormat: "brackets", encode: false }), "a[]=1&a[]=2");
assert.deepStrictEqual(settings(["--timeout", "2m", "--verbose"]), { timeout: 120000, verbose: true });

// We vendor a patch against debug 4.3's internals (see README), so the
// test refuses any other minor until the patch is redone.
assert.ok(require("debug/package.json").version.startsWith("4.3."), "debug must stay on 4.3.x");
console.log("ok");
