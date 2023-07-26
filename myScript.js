// Girilen sayının tek mi çift mi olduğunu bulan programı yazınız.

let number = prompt("Lütfen sayı giriniz")


let mcls=number%2;
if (mcls==0){
    console.log("Bu bir çift sayıdır.")
}
    else {
    console.log("Bu bir tek sayıdır.")
}
    
// Girilen sayı 4, 5 ve 6 sayılarından en az birine bölünüyorsa “Sayı Uygun”, aksi halde “Sayı Uygun Değil” mesajı veren programı yazınız.


let sayi1 =number%4;
let sayi2=number%5;
let sayi3=number%6;

if (sayi1==0 || sayi2==0 || sayi3==0) {
    console.log("sayı uygun")
}
else {
    console.log("sayı uygun değil");
}

// Girilen sayı 0 ile 100 arasında ve çift ise “Sayı Uygun”, aksi halde “Sayı Uygun Değil” mesajı veren programı yazınız.

let x=number%2;
let y=number;

if (x==0 && y>0 && y<100){
    console.log("sayı uygun")
}
else {
    console.log("Sayı Uygun Değil")
}


