import { promises as fs } from 'fs'
const filename = './src/one/input.txt'

;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfDepths = fileInput.split('\n').map((depth) => parseInt(depth))

  const arrayOfDepthsGrouped = arrayOfDepths.reduce<number[]>((groupedArray, currentDepth, index) => {
    if (index > 1) {
      return [...groupedArray, currentDepth + arrayOfDepths[index - 1] + arrayOfDepths[index - 2]]
    }
    return groupedArray
  }, [])

  const total = arrayOfDepthsGrouped.reduce<number>((tally, currentDepth, index) => {
    if (index !== 0 && currentDepth > arrayOfDepthsGrouped[index - 1]) {
      return tally + 1
    }

    return tally
  }, 0)

  console.log(total)
})()
