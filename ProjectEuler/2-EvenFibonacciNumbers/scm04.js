let sum = 0
let a = 1
let b = 2
while (b < 4_000_000) {
	if (b % 2 === 0) sum += b
	b = a + b
	a = b - a
}

console.log(sum)
