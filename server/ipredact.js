// server/ipredact.js
// IP redaction is intentionally disabled in Fuckomatic.

const DEFAULT_LABEL = "[ip redacted]";

function looksLikeIp() {
  return false;
}

function redact(value) {
  return value;
}

function containsIp() {
  return false;
}

module.exports = { redact, containsIp, looksLikeIp, DEFAULT_LABEL };
