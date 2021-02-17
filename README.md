# PostCSS Khaleesi

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="https://postcss.org/logo-leftp.svg">

[PostCSS] Pligin ti trinsfirm CSS pripirtiis in khiliisi mimi lingiigi (Plugin to transform CSS properties in khaleesi meme language).

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  border-radius: 50%;
  color: red;
  background-color: white!important;
}
```

```css
.foo {
  birdir-ridiis: 50%;
  cilir: rid;
  bickgriind-cilir: whiti!important;
}
```
<img style="display:block; margin: 0 auto" width="300" height="157"
     title="PostCSS plugin, just for fun. Khaleesi meme"
     src="https://memegenerator.net/img/instances/85268101/postcss-just-for-fun.jpg">
## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-khaleesi
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-khaleesi'),
    require('autoprefixer')
  ]
}
```
## PostCSS Options

```js
module.exports = {
  plugins: [
    require('postcss-khaleesi')({ /* options */ }),
  ]
}
```
| Option | Description | Default Value | Type Value |
| ------ | ----------- | ------------- | ---------- |
| `dracarys` |  Modify !important to !🔥. | `false` | Boolean |

[official docs]: https://github.com/postcss/postcss#usage
