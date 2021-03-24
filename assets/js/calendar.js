const today = {
    hari: new Date().getDate(),
    bulan: (new Date().getMonth()) + 1,
    tahun: new Date().getFullYear()
};


function hitungUrip(tanggal, bulan, tahun) {
    let februari
    if (tahun % 4 == 0) {
        februari = 29;
    } else {
        februari = 28;
    }
    let jumlahHari;
    if (bulan == "1") {
        jumlahHari = tanggal;
    } else if (bulan == "2") {
        jumlahHari = 31 + tanggal;
    } else if (bulan == "3") {
        jumlahHari = 31 + februari + tanggal;
    } else if (bulan == "4") {
        jumlahHari = 62 + februari + tanggal;
    } else if (bulan == "5") {
        jumlahHari = 92 + februari + tanggal;
    } else if (bulan == "6") {
        jumlahHari = 123 + februari + tanggal;
    } else if (bulan == "7") {
        jumlahHari = 153 + februari + tanggal;
    } else if (bulan == "8") {
        jumlahHari = 184 + februari + tanggal;
    } else if (bulan == "9") {
        jumlahHari = 215 + februari + tanggal;
    } else if (bulan == "10") {
        jumlahHari = 254 + februari + tanggal;
    } else if (bulan == "11") {
        jumlahHari = 276 + februari + tanggal;
    } else {
        jumlahHari = 306 + februari + tanggal;
    }


    const a = (tahun - 1) % 4;
    const q = ((tahun - 1) - a) / 4;


    const xx = (jumlahHari + q) % 5;

    let pancawara;
    let nPancawara;
    if (xx == 0) {
        pancawara = {
            nama: "Umanis",
            nilai: 5
        };
    } else if (xx == 1) {
        pancawara = {
            nama: "Paing",
            nilai: 9
        };
    } else if (xx == 2) {
        pancawara = {
            nama: "Pon",
            nilai: 7
        };
    } else if (xx == 3) {
        pancawara = {
            nama: "Wage",
            nilai: 4
        };
    } else if (xx == 4) {
        pancawara = {
            nama: "Kliwon",
            nilai: 8
        };
    }

    const xxx = (jumlahHari + q + tahun) % 7;
    let saptawara;
    if (xxx == 0) {
        saptawara = {
            nama: "Jumat",
            nilai: 6
        };
    } else if (xxx == 1) {
        saptawara = {
            nama: "Sabtu",
            nilai: 9
        };
    } else if (xxx == 2) {
        saptawara = {
            nama: "Minggu",
            nilai: 5
        };
    } else if (xxx == 3) {
        saptawara = {
            nama: "Senin",
            nilai: 4
        };
    } else if (xxx == 4) {
        saptawara = {
            nama: "Selasa",
            nilai: 3
        };
    } else if (xxx == 5) {
        saptawara = {
            nama: "Rabu",
            nilai: 7
        };
    } else {
        saptawara = {
            nama: "Kamis",
            nilai: 8
        };
    }

    // MENGHITUNG URIP
    const urip = saptawara.nilai + pancawara.nilai;

    return urip;

}

const person = {
    dharma: {
        nama: "Sudharma Putra",
        hari: 24,
        bulan: 12,
        tahun: 1994
    },
    pasek: {
        nama: "Gede Pasek",
        hari: 8,
        bulan: 9,
        tahun: 1988
    },
    dwi: {
        nama: "Kadek Dwi",
        hari: 21,
        bulan: 3,
        tahun: 1990
    },
    pande: {
        nama: "Pande Sastrawan",
        hari: 7,
        bulan: 1,
        tahun: 1990
    }
}


const uripHariIni = hitungUrip(today.hari, today.bulan, today.tahun);

const uripDharma = hitungUrip(person.dharma.hari, person.dharma.bulan, person.dharma.tahun) + uripHariIni;
const uripPasek = hitungUrip(person.pasek.hari, person.pasek.bulan, person.pasek.tahun) + uripHariIni;
const uripPande = hitungUrip(person.pande.hari, person.pande.bulan, person.pande.tahun) + uripHariIni;
const uripDwi = hitungUrip(person.dwi.hari, person.dwi.bulan, person.dwi.tahun) + uripHariIni;


switch(uripDharma%4){
    case 1 :
        document.getElementById("rowDharma").classList.add('bg-primary');
        document.getElementById("statusUripDharma").textContent += "Guru";;
        break;
    case 2 :
        document.getElementById("rowDharma").classList.add('bg-primary');
        document.getElementById("statusUripDharma").textContent += "Ratu";;
        break;
    case 3 :
        document.getElementById("rowDharma").classList.add('bg-danger');
        document.getElementById("statusUripDharma").textContent += "Lara";;
        break;
    case 4 :
        document.getElementById("rowDharma").classList.add('bg-danger');
        document.getElementById("statusUripDharma").textContent += "Pati";;
        break;
    default :
        document.getElementById("rowDharma").classList.add('bg-danger');
        document.getElementById("statusUripDharma").textContent += "Pati";;
        break;
}








const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
        const aaa = hitungUrip(i, 03, 2021) + hitungUrip(person.dharma.hari, person.dharma.bulan, person.dharma.tahun);
        switch(aaa%4){
            case 1 :
            case 2 :
                days += `<div class="hari-biru ${aaa}">${i}</div>`;
                break;
            default :
                days += `<div class="hari-merah ${aaa}">${i}</div>`;
                break;
        }
        
        
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
