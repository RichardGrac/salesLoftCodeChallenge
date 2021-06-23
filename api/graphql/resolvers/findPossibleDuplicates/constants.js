function define(name, value) {
  Object.defineProperty(exports, name, {
    value,
    enumerable: true
  });
}

// This 'MIN_LENGTH_FOR_VERIFICATION' is not based in something special.
// It could be modified as wanted.
define("MIN_LENGTH_FOR_VERIFICATION", 5);
