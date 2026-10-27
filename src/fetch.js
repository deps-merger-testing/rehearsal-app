// Fetches the release feed. Only the CLI calls it, so the tests don't.
const fetch = require("node-fetch");
const qs = require("qs");
const log = require("debug")("rehearsal:fetch");

async function releases(owner, repo, page = 1) {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases?${qs.stringify({ per_page: 10, page })}`;
  log("GET %s", url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.json();
}

module.exports = { releases };
