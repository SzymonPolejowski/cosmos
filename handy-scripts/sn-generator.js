const AMOUNT = process.argv[2]

function randomFromArray(Array) {
  return Array[~~(Array.length * Math.random())]
}

function generateSN() {
  const alpha = 'abcdefghijklmnopqrstuvwxyz1234567890'.toUpperCase().split('')
  const length = 10

  let sn = '' 
  for (let i = 0; i < length; i++) {
    sn += randomFromArray(alpha)
  }

  return sn
}


for (let i = 0; i < AMOUNT; i++) {
  console.log(`SN: "${generateSN()}",`)
}
