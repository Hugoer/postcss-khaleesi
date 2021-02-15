/* module.exports = (opts = { }) => { */
module.exports = () => {
  // Work with options here
  function translate (text) {
    /* var x = 'Plugin to transform CSS properties in khaleesi meme language'; */
    var list = 'aeiou'.split('');
    return text.split('').map((char) => list.includes(char) ? 'i' : char).join('');
  }
  return {
    postcssPlugin: 'postcss-khaleesi',
/*     Root (root, postcss) {
      // Transform CSS AST here
      console.log(root,postcss);
    }, */

    Declaration (decl) {
      // The faster way to find Declaration node
      decl.value = translate(decl.value);
      decl.prop = translate(decl.prop);
      return decl;
    }

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  }
}
module.exports.postcss = true
