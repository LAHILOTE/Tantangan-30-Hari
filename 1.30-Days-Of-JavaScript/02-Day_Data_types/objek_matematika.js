const PI = Math.PI
console.log(PI) // 3.141592653589793
console.log(Math.round(PI)) // 3; untuk membulatkan nilai ke angka terdekat
console.log(Math.round(9.81)) // 10 ; Hasil di bulatkan ke angka terdekat yaitu 10
console.log(Math.floor(PI)) // 3; pembulatan ke bawah
console.log(Math.ceil(PI)) // 4; pembulatan ke atas
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5; mengembalikan nilai minimum
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20; mengembalikan nilai maksimum


const randNum = Math.random() // membuat angka acak antara 0 hingga 0,999999
console.log(randNum)

// Mari kita buat angka acak antara 0 hingga 10
const num = Math.floor(Math.random() * 11) // membuat angka acak antara 0 dan 10
console.log(num)
// Contoh Lain
const angkaAcak = Math.random()
console.log(angkaAcak) // Angka Acak dari 0 hingga 0,999999
console.log(Math.floor(angkaAcak * 11)) // Angka Acak dari 0 hingga 10
console.log(Math.floor(angkaAcak * 101)) // Angka Acak dari 0 hingga 100
console.log(Math.floor(angkaAcak * 11) + 1) // Angka Acak dari 1 Hingga 10



// Nilai mutlak
console.log(Math.abs(-10)) // 10

// Akar pangkat dua
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(2)) // 1.4142135623730951
// Power atau Eksponen (Eksponen adalah istilah yang digunakan ketika suatu bilangan dikalikan dengan bilangan itu sendiri beberapa kali)
console.log(Math.pow(3, 2)) // 9
console.log(Math.E) // Bilangan e (atau, disebut juga sebagai bilangan Euler) adalah konstanta matematika yang di mana nilai kira-kiranya sama dengan 2,71828



// Logaritma
// Logaritma alami atau logaritma natural (Inggris: natural logarithm) adalah suatu logaritma yang berbasis e, di mana e ≈ 2.718281828459045
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046


// Trigonometri
console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))