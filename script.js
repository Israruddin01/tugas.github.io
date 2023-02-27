// let nilai = prompt("masukkan nilai : ", 0);
// let hasil = "";

// switch(nilai == true){
//     case nilai > 10:
//         hasil = "D"
//         break;
//     default:
//         document.write("Tidak ada");
// }

// document.write(hasil);

// // 91 - 100 = A
// // 81 - 90 = B 
// // 71 - 80 = C
// // 61 - 70= D 
// // 0 - 60= F

let nilai = prompt("masukkan nilai : ", 0);
let hasil = "";

switch(true){
    case nilai >= 91 && nilai <= 100:
        hasil = "A";
        break;
    case nilai >= 81 && nilai <= 91:
        hasil = "B";
        break;
    case nilai >= 71 && nilai <= 81:
        hasil = "C";
        break;
    case nilai >= 61 && nilai <= 71:
        hasil = "D";
        break;
    case nilai >= 0 && nilai <= 61:
        hasil = "F";
        break;
    default:
    document.write("tidak ada");
}
document.write(hasil); 
