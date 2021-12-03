import { promises as fs } from 'fs'
const filename = './src/two/input.txt'

type Coordinates = { horizontal: number; depth: number; aim: number }
type Direction = 'forward' | 'up' | 'down'
;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfInputs = fileInput.split('\n')

  const coordinates: Coordinates = arrayOfInputs.reduce<Coordinates>(
    (finalCoordinates, currentInput) => {
      const [direction, distance] = currentInput.split(' ') as [Direction, string]

      return {
        horizontal:
          direction === 'forward' ? finalCoordinates.horizontal + parseInt(distance) : finalCoordinates.horizontal,
        depth:
          direction === 'forward'
            ? finalCoordinates.depth + finalCoordinates.aim * parseInt(distance)
            : finalCoordinates.depth,
        aim:
          direction === 'up'
            ? finalCoordinates.aim - parseInt(distance)
            : direction === 'down'
            ? finalCoordinates.aim + parseInt(distance)
            : finalCoordinates.aim,
      }
    },
    { horizontal: 0, depth: 0, aim: 0 },
  )

  console.log(coordinates)
  console.log(coordinates.horizontal * coordinates.depth)
})()
