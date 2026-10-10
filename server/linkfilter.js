// server/linkfilter.js
// Link filtering is intentionally disabled in Fuckomatic.

function looksLikeLink() {
  return false;
}

function redact(value) {
  return value;
}

function containsLink() {
  return false;
}

module.exports = {
  redact,
  containsLink,
  looksLikeLink,
  listAllowed: () => [],
  addAllowed: () => ({ ok: true, host: null }),
  removeAllowed: () => false,
  DEFAULT_LABEL: "[link removed]",
};
