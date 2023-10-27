//Soal
//To obtain data on the population of a particular age group in region 'Z', the government conducted a population census. This census is conducted based on 8 age groups, namely: age under 5 years, age 5 - 9 years, age 10 - 19 years, age 20 - 29 years, age 30 - 39 years, age 40 - 49 years, age 50 - 59 years, and age 60 years and over. Create a program to enter the age of a number of residents and then display the number of residents based on the above age groups.
//Example :
// jumlah penduduk = 5, dengan umur 25, 11, 57, 2, 13
// maka outputnya adalah
// kelompok dibawah 5 tahun = 1
// kelompok 5 - 9 tahun = 0
// kelompok 10 - 19 tahun = 2
// kelompok 20 - 29 tahun = 1
// kelompok 30 - 39 tahun = 0
// kelompok 40 - 49 tahun = 0
// kelompok 50 - 59 tahun = 1
// kelompok 60 tahun ketas = 0

let kelompok = [0, 0, 0, 0, 0, 0, 0, 0];
let jmlPenduduk = parseInt(prompt("Masukkan jumlah penduduk"));

for (let i = 0; i < jmlPenduduk; i++) {
  let umur = parseInt(prompt(`Usia penduduk ke-${i + 1} :`));

  if (umur < 5) {
    kelompok[0]++;
  } else if (umur >= 5 && umur <= 9) {
    kelompok[1]++;
  } else if (umur >= 10 && umur <= 19) {
    kelompok[2]++;
  } else if (umur >= 20 && umur <= 29) {
    kelompok[3]++;
  } else if (umur >= 30 && umur <= 29) {
    kelompok[4]++;
  } else if (umur >= 40 && umur <= 49) {
    kelompok[5]++;
  } else if (umur >= 50 && umur <= 59) {
    kelompok[6]++;
  } else if (umur >= 60) {
    kelompok[7]++;
  }
}

console.log(`kelompok dibawah 5 tahun = ${kelompok[0]}`);
console.log(`kelompok 5 - 9 tahun = ${kelompok[1]}`);
console.log(`kelompok 10 - 19 tahun = ${kelompok[2]}`);
console.log(`kelompok 20 - 29 tahun = ${kelompok[3]}`);
console.log(`kelompok 30 - 39 tahun = ${kelompok[4]}`);
console.log(`kelompok 40 - 49 tahun = ${kelompok[5]}`);
console.log(`kelompok 50 - 59 tahun = ${kelompok[6]}`);
console.log(`kelompok 60 tahun ketas = ${kelompok[7]}`);
