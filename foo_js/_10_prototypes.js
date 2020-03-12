// prototypes

/**
 * Replaces all substrings with a replacement.
 */
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

