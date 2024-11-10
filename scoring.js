var ivan = { name: 'Ваня', score: 0 }
var vika = { name: 'Вика', score: 0 }
var max = { name: 'Макс', score: 0 }
var misha = { name: 'Миша', score: 0 }

console.log('Начало игры, счет:')
var scores = [ivan, vika, max, misha]
console.log(scores)

console.log('Ваня забивает 3 очка 😨:')
ivan.score += 3
console.log(scores)

console.log('Вика забивает 2 очка 🤑:')
vika.score += 2
console.log(scores)

console.log('Максончикс забивает 4 очка 🤯:')
max.score += 4
console.log(scores)

console.log('Миша забивает 37 очков ватафак 😱:')
misha.score += 37
console.log(scores)

console.log('Ваня забивает 238 очков 🥵😈🤪:')
ivan.score += 238
console.log(scores)

console.log('Короче Ваня выиграл, ура ура ура 😋')
console.log(scores)
