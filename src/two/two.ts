import { promises as fs } from 'fs'
const filename = './src/two/input.txt'

type Coordinates = { horizontal: number; depth: number }
;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfInputs = fileInput.split('\n')

  const coordinates: Coordinates = arrayOfInputs.reduce<Coordinates>(
    (finalCoordinates, currentInput) => {
      const [direction, distance] = currentInput.split(' ')

      return {
        horizontal:
          direction === 'forward' ? (finalCoordinates.horizontal += parseInt(distance)) : finalCoordinates.horizontal,
        depth:
          direction === 'up'
            ? (finalCoordinates.depth -= parseInt(distance))
            : direction === 'down'
            ? (finalCoordinates.depth += parseInt(distance))
            : finalCoordinates.depth,
      }
    },
    { horizontal: 0, depth: 0 },
  )

  console.log(coordinates)
  console.log(coordinates.horizontal * coordinates.depth)
})()
