let fat_number: number = 6
let soma: number = 1

// 5 * 4 * 3 * 2 * 1 = 120

for (let i: number = fat_number; i > 0; i--) {
    soma *=  i
}

console.log('resultado final: ', soma)