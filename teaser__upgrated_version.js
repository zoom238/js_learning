var teasersPack = [
	'Meanie',
	'Silly billy',
	'Upsy - daisy',
	'Teeny weeny',
	'Fraidy cat',
]

var adjectiveForTeasing = [
	'You are',
	'Your mom is',
	'You looks like',
	'Why are you so',
]

console.log(
	adjectiveForTeasing[Math.floor(Math.random() * 4)] +
		' ' +
		teasersPack[Math.floor(Math.random() * 5)]
)
