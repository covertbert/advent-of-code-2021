import { promises as fs } from 'fs'
const filename = './src/three/input.txt'

;(async () => {
  const fileInput = await fs.readFile(filename, 'utf8')
  const arrayOfInputs = fileInput.split('\n')

  const gammaTotals = arrayOfInputs.reduce<number[]>(
    (totalArray, currentFromInputs) =>
      totalArray.map(
        (currentFromTotal, index) =>
          (currentFromTotal += currentFromInputs.split('').map((number) => parseInt(number))[index]),
      ),
    Array(12).fill(0),
  )

  const gammaRate = gammaTotals.map((current) => (current >= arrayOfInputs.length / 2 ? 1 : 0))
  const epsilonRate = gammaRate.map((current) => (current === 0 ? 1 : 0))

  const gammaAsDecimal = parseInt(gammaRate.join(''), 2)
  const epsilonAsDecimal = parseInt(epsilonRate.join(''), 2)

  console.log(gammaAsDecimal * epsilonAsDecimal)
})()
