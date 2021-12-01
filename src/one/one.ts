import { promises as fs } from 'fs'
const filename = './src/one/input.txt'

;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfDepths = fileInput.split('\n').map((depth) => parseInt(depth))

  const total = arrayOfDepths.reduce<number>((tally, currentDepth, index) => {
    if (index !== 0 && currentDepth > arrayOfDepths[index - 1]) {
      return tally + 1
    }
    return tally
  }, 0)

  console.log(total)
})()
