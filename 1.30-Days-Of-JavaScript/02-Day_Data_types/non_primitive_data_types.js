//Tipe data non-primitif dapat dimodifikasi atau diubah. Kita dapat mengubah nilai tipe data non-primitif setelah dibuat. Mari kita lihat dengan membuat array. Array adalah daftar nilai data dalam tanda kurung siku. Array dapat berisi tipe data yang sama atau berbeda. Nilai array direferensikan oleh indeksnya. Dalam indeks array JavaScript dimulai dari nol. Yaitu, elemen pertama dari array ditemukan pada indeks nol, elemen kedua pada indeks satu, dan elemen ketiga pada indeks dua, dan seterusnya.

let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

// Seperti yang Anda lihat, array, yang merupakan tipe data non-primitif bisa berubah. Tipe data non-primitif tidak dapat dibandingkan berdasarkan nilainya. Meskipun dua tipe data non-primitif memiliki properti dan nilai yang sama, keduanya tidak sepenuhnya sama.

let ang = [1, 2, 3]
let angka = [1, 2, 3]
console.log(ang == angka) // false

let userOne = {
    name: 'Asabeneh',
    role: 'teacing',
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
console.log(userOne == userTwo) // false

// Aturan praktisnya, kami tidak membandingkan tipe data non-primitif. Jangan bandingkan array, fungsi, atau objek. Nilai non-primitif disebut sebagai tipe referensi, karena nilai tersebut dibandingkan berdasarkan referensi, bukan nilai. Dua objek hanya benar-benar sama jika keduanya mengacu pada objek dasar yang sama.


let nom = [1, 2, 3]
let nomor = nom
console.log(nom == nomor) // true


let userSatu = {
    nama: 'Machmud',
    role: 'IT',
    country: 'Indonesia'
}
let userDua = userSatu
console.log(userDua == userSatu) // true



// Jika Anda kesulitan memahami perbedaan antara tipe data primitif dan tipe data non-primitif, Anda bukan satu-satunya. Tenang dan langsung saja ke bagian berikutnya dan coba kembali lagi setelah beberapa waktu. Sekarang mari kita mulai tipe data berdasarkan tipe angka.