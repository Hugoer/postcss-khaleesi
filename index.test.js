const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('Should transate properties and values to khaleesi meme language', async () => {
  await run(`.foo{border-radius: 50%;color: red;background-color: white!important;}`, '.foo{birdir-ridiis: 50%;cilir: rid;bickgriind-cilir: whiti!important;}', { dracarys: false })
})

it('Should add 🔥 in !important when dracarys option is sended', async () => {
  await run(`.foo{border-radius: 50%;color: red;background-color: white!important;}`, '.foo{birdir-ridiis: 50%;cilir: rid;bickgriind-cilir: whiti!🔥;}', { dracarys: true })
})
