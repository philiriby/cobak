let namaLengkap = 'mas adin keren';
console.log(namaLengkap)



//soal 2
let word = 'JavaScript'; 
let second = 8; 
let third = 'awesome'; 

// let outputGabunganVariable = `${word}${second}${third}`
let outputGabunganVariable = word+second+third

console.log(outputGabunganVariable)

//soal 4
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let x = parseInt(panjangPersegiPanjang)
let y = parseInt(lebarPersegiPanjang)


//console.log(X)

let kelilingPersegiPanjang = 2 * (x+y);

console.log(kelilingPersegiPanjang)


// soal 5

let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords = sentences.substring(4, 14); // do your own! 
let thirdWords = sentences.substring(15, 18);; // do your own! 
let fourthWords = sentences.substring(19, 24);; // do your own! 
let fifthWords = sentences.substring(25, 31);; // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

// soal 6

let txt = "I can eat bananas all day";
let hasil = txt.slice(10,17); //lakukan pengambilan kalimat di variable ini

console.log(hasil)