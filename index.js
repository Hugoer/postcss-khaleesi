module.exports = (opts = { }) => {
  function translate (text) {
    var list = 'aeiou'.split('');
    return text.split('').map((char) => list.includes(char) ? 'i' : char).join('');
  }
  return {
    postcssPlugin: 'postcss-khaleesi',
    Declaration (decl) {
      decl.value = translate(decl.value);
      decl.prop = translate(decl.prop);
      if ( opts.dracarys === true && decl.important ) {
        decl.important = false;
        decl.value = `${decl.value}!🔥`;
      }
      return decl;
    }
  }
}
module.exports.postcss = true
