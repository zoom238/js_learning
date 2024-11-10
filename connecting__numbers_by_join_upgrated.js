var randomNumber = [Math.floor(Math.random() * 10) + 1]

console.log(randomNumber)

var groupOfNumbers = []

while (randomNumber) {
	groupOfNumbers.push(randomNumber--)
}

var result = groupOfNumbers.join(' is more then ')

console.log(result)
