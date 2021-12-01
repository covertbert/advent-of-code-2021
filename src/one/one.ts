import { promises as fs } from 'fs'
const filename = './src/one/input.txt'

;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfDepths = fileInput.split('\n')

  const tally = arrayOfDepths.reduce<number>((tally, currentDepth, index) => {
    if (index !== 0 && parseInt(currentDepth) > parseInt(arrayOfDepths[index - 1])) {
      return tally + 1
    }
    return tally
  }, 0)

  console.log(tally)
})()
