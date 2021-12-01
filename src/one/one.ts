import { promises as fs } from 'fs'
const filename = './src/one/input.txt'

;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfDepths = fileInput.split('\n')

  let tallyOfDepthsHigherThanPrevious = 0

  arrayOfDepths.forEach((depth, index) => {
    if (index !== 0 && parseInt(depth) > parseInt(arrayOfDepths[index - 1])) {
      tallyOfDepthsHigherThanPrevious += 1
    }
  })

  console.log(tallyOfDepthsHigherThanPrevious)
})()
