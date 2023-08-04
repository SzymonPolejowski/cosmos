const AMOUNT = process.argv[2]

function randomElementFromArray(Array) {
  return Array[~~(Array.length * Math.random())]
}

function generateMac() {
  const ACCEPTED_SYMBOLS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

  let mac = new Array(6)
    .fill("")
    .map(_ => randomElementFromArray(ACCEPTED_SYMBOLS) + randomElementFromArray(ACCEPTED_SYMBOLS))
    .join(":")

  return mac
}

function generateIP() {
  let ip = new Array(4)
    .fill("")
    .map(_ => ~~(Math.random()*256))
    .join(".")

  return ip
}

for (let i = 0; i < AMOUNT; i++) {
  console.log(`MAC: "${generateMac()}",`)
  console.log(`IP: "${generateIP()}",`)
}
