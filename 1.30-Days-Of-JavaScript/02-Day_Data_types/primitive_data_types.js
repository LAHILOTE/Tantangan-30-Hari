let word = 'JavaScript'
word[0] = 'Y'  // Ekspresi ini tidak mengubah string yang disimpan dalam variabel word. Jadi, kita dapat mengatakan bahwa string tidak dapat diubah atau dengan kata lain immutable.

// kami tidak mengubah string
// kami tidak melakukan hal seperti ini, word[0] = 'Y'
console.log(word)



// Primitive data types dibandingkan berdasarkan nilainya. Mari kita bandingkan nilai data yang berbeda. Lihat contoh di bawah ini:

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)  // true

let js = 'JavaScript'
let py = 'Python'
console.log(js == py) // false


let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) // false