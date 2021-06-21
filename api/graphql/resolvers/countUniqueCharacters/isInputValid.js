function isInputValid(text) {
  if (!text) {
    return false;
  }

  if (text.trim().length === 0) {
    return false;
  }

  return true;
}

module.exports = { isInputValid }
