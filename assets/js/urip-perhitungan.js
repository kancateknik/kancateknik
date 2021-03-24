// function hitungUrip(tanggal, bulan, tahun) {
//     let februari
//     if (tahun % 4 == 0) {
//         februari = 29;
//     } else {
//         februari = 28;
//     }
//     let jumlahHari;
//     if (bulan == "1") {
//         jumlahHari = tanggal;
//     } else if (bulan == "2") {
//         jumlahHari = 31 + tanggal;
//     } else if (bulan == "3") {
//         jumlahHari = 31 + februari + tanggal;
//     } else if (bulan == "4") {
//         jumlahHari = 62 + februari + tanggal;
//     } else if (bulan == "5") {
//         jumlahHari = 92 + februari + tanggal;
//     } else if (bulan == "6") {
//         jumlahHari = 123 + februari + tanggal;
//     } else if (bulan == "7") {
//         jumlahHari = 153 + februari + tanggal;
//     } else if (bulan == "8") {
//         jumlahHari = 184 + februari + tanggal;
//     } else if (bulan == "9") {
//         jumlahHari = 215 + februari + tanggal;
//     } else if (bulan == "10") {
//         jumlahHari = 254 + februari + tanggal;
//     } else if (bulan == "11") {
//         jumlahHari = 276 + februari + tanggal;
//     } else {
//         jumlahHari = 306 + februari + tanggal;
//     }


//     const a = (tahun - 1) % 4;
//     const q = ((tahun - 1) - a) / 4;


//     const xx = (jumlahHari + q) % 5;

//     let pancawara;
//     let nPancawara;
//     if (xx == 0) {
//         pancawara = {
//             nama: "Umanis",
//             nilai: 5
//         };
//     } else if (xx == 1) {
//         pancawara = {
//             nama: "Paing",
//             nilai: 9
//         };
//     } else if (xx == 2) {
//         pancawara = {
//             nama: "Pon",
//             nilai: 7
//         };
//     } else if (xx == 3) {
//         pancawara = {
//             nama: "Wage",
//             nilai: 4
//         };
//     } else if (xx == 4) {
//         pancawara = {
//             nama: "Kliwon",
//             nilai: 8
//         };
//     }

//     const xxx = (jumlahHari + q + tahun) % 7;
//     let saptawara;
//     if (xxx == 0) {
//         saptawara = {
//             nama: "Jumat",
//             nilai: 6
//         };
//     } else if (xxx == 1) {
//         saptawara = {
//             nama: "Sabtu",
//             nilai: 9
//         };
//     } else if (xxx == 2) {
//         saptawara = {
//             nama: "Minggu",
//             nilai: 5
//         };
//     } else if (xxx == 3) {
//         saptawara = {
//             nama: "Senin",
//             nilai: 4
//         };
//     } else if (xxx == 4) {
//         saptawara = {
//             nama: "Selasa",
//             nilai: 3
//         };
//     } else if (xxx == 5) {
//         saptawara = {
//             nama: "Rabu",
//             nilai: 7
//         };
//     } else {
//         saptawara = {
//             nama: "Kamis",
//             nilai: 8
//         };
//     }

//     // MENGHITUNG URIP
//     const urip = saptawara.nilai + pancawara.nilai;

//     return urip;

// }

