const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('does something', async () => {
  await run(`body{border-radius: 50%;color: red;background-color: white!important;}`, 'body{birdir-ridiis: 50%;cilir: rid;bickgriind-cilir: whiti!important;}', { })
})


