import { promises as fs } from 'fs'
const filename = './src/three/input.txt'

;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfInputs = fileInput.split('\n')

  const totalInputsLength = arrayOfInputs.length

  const gammaTotals = arrayOfInputs.reduce<number[]>(
    (totalArray, current) => {
      const currentBinaryNumberAsArray = current.split('').map((number) => parseInt(number))

      return totalArray.map((current, index) => (current += currentBinaryNumberAsArray[index]))
    },
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  )

  const actualGammaRate = gammaTotals.map((current) => (current >= totalInputsLength / 2 ? 1 : 0))
  const epsilonRate = actualGammaRate.map((current) => (current === 0 ? 1 : 0))

  const gammaAsDecimal = parseInt(actualGammaRate.join(''), 2)
  const epsilonAsDecimal = parseInt(epsilonRate.join(''), 2)

  console.log(gammaAsDecimal * epsilonAsDecimal)
})()
