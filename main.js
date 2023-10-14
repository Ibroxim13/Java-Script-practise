"use strict";
// let x = 12;
// let y = 10;
// var result = x >= y ? "12 soni 10 dan katta" : "10 soni 12 dan katta";
// console.log(result);

// let number = 12;
// var result = (number %= 2)==0? "juft" : "toq";
// console.log(result)

// var value = -10;
// var secondResult = value > 0? "musbat" : "manfiy";
// console.log(secondResult);

// let a = 3;
// let b = 4;
// let c = (a**2 + b**2)**(1/2);
// console.log(c);






// //kvadrat
// let a = 3;
// console.log(a * 4);
// console.log(a ** 2);

// //to'gri to'rtburchak
// let b = 12;
// let c = 16;
// console.log(b * c, "yuzasi", 2 * (a + b), "perimetri");//yuzasi va perimetri
// ;

// //aylana
// let diametr = 15;
// console.log(3.14 * 15, "aylaning uzunligi");

// //kub
// let kubA = 5;
// console.log((kubA ** 3), "kubning hajmi", (6 * (kubA**2)), "kubning to'la sirti");

// //paralelepepid
// let pA = 12;
// let pB = 10;
// let pC = 8;
// console.log(pA * pB * pC, "paralelepepidning hajmi", 2 * (pA * pB + pB * pC + pA * pC), "paralelepepidning to'la sirti"  )

// //doira
// let dRadius = 19;
// console.log(dRadius * 3.14 * 2 , "doiraning uzunligi", 3.14 * (dRadius**2), "doiraning yuzasi");

//o'rta arifmetik
// let e = 4;
// let s = 3;
// console.log((e + s )/ 2 , "sonlarning o'rta arifmetigi");

// let x = 2;
// let y = 4;

// if (x > y) {
//     console.log("x soni katta");
// }
// else {
//     console.log("y soni katta");
// }

// //o'rta geometrik
// let a = 3;
// let b = 6;
// console.log((a*b)**(1/2));

//10 misol
// let x = 10;
// let y = 6;
// console.log(x + y, "sonlarning yig'indisi", x * y, "sonlarning ko'paytmasi", x ** 2, "x soning kavadrati", y ** 2, "y soning kavadrati")

//12 misol
// let c = 5;
// let b = 12;
// let a = ((c ** 2 + b ** 2) ** (1 / 2))
// console.log(a + b + c, "uchburchakning perimetri", a, "uchburchakning gipotenuzasi");

//13misol
// let r1 = 7;
// let r2 = 3;
// console.log(3.14 * r1, 'birinchi aylananig yuzasi', 3.14 * r2, 'ikkinchi aylaning yuzasi', 3.14 * (r1 - r2),'yuzalarining ayirmasi')

// 14 misol
// var aylanaUzunligi = 12;
// console.log('Aylanaing radiusi', 6 / 3.14, 'ga yuzasi', 3.14 * ((6 / 3.14) ** 2), 'ga teng');

// 15 misol
// var aylanaYuzasi = 28;
// var aylanaradiusi = (4 / 3.14) ** (1 / 2);
// console.log('aylananing diametri', aylanaradiusi ** 2, 'ga', 'aylananing radiusi', aylanaradiusi, 'ga teng');

// boolen1
// var x = 12;
// console.log(x > 0);

//boolen1
// let y = 11;
// console.log(y % 2 != 0);

// boolen3
// let x = 12;
// console.log(12 / 2!= 0);

// boolen4
// let a = 12;
// let b = 3;
// console.log(a>2 && b<=3);

// boolen5
// let x = 5;
// let y = -3;
// console.log(x >= 0 && y < -2);

// boolen6 boolen7
// let a = 2;
// let b = 4;
// let c = 8;
// console.log(a <= b <= c);
// console.log(a < b < c);

//boolen8
// let a = 3;
// let b = 5;
// console.log(a % 2 != 0 && b % 2 != 0);

// boolen9
// let a = 32;
// let b = 10;
// console.log(a % 2 != 0 || b % 2 != 0);

// masala1
// let a = 7;
// let b = 6;
// let c = a > b ? Math.trunc(Math.pow((a ** 3 + b ** 3), 1 / 3)) : "false";
// console.log(c);

// minmax1
// let a = 12;
// let b = 97;
// let c = -2;
// let d = 4;
// console.log(Math.max(a,b,c,d),"to'plamdagi eng katta son");
// console.log(Math.min(a,b,c,d),"to'plamdagi eng kichik son");

// minmax2
// let a = 2;
// let b = 5;
// let c = 3;
// let d = 9;
// console.log(Math.min(a * b, c * d));

// minmax3
// console.log(Math.max(((a+b)*2),(c+d)*2));

//minmax4
// console.log(Math.min(a,b,c,d));

// lesson strings
// let str1 = "salom hammaga";
// let str2 = "salom world";
// console.log(str1.slice(0,5) + " " + str2.slice(6));
// console.log(str1.length);

// let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, facilis.";
// console.log(text.replace(/i/gi, "siuu"));

// console.log(("b"+ "a"+ + "a" + "a").toLowerCase());






//if1
// let x = 12;
// if (x > 0) {
//     console.log(++x);
// }
// else {
//     console.log(x);
// }

//if2
// let y = -4;
// if (y > 0) {
//     console.log(++y);
// }
// else {
//     console.log(y - 2);
// }

//if3
// let z = 0;
// if (z > 0) {
//     console.log(++z);
// }
// else if (z < 0) {
//     console.log(z - 2);
// }
// else{
//     z = 10;
//     console.log(z);
// }

//if4
// let x = 3, y = -2, z = 4;
// if (x > 0, y > 0, z > 0) {
//     console.log(3);
// }
// else if (x < 0, y < 0, z < 0) {
//     console.log(0);
// }
// else if (){
//     console.log(2);
// }

// if5


//if6  if7
// let x = 23;
// let y = 32;
// if (x > y) {
//     console.log(x);
// }
// else{
//     console.log(y);
// }


// if (x < y) {
//     console.log(x);
// }
// else{
//     console.log(y);
// }

//if8
// if (x > y) {
//     console.log('kattasi ',x,'kichigi ',y);
// }
// else{
//     console.log('kattasi ',y,'kichigi ',x);
// }

//if9
// let a = 12;
// let b = 4;
// if (a > b) {
//     a = b - a;
//     b = a + b;
//     console.log(a,b);
// }

// if10
// let a = 26;
// let b = 26;
// if (a !== b) {
//     let c = a + b;
//     a = c;
//     b = c;
//     console.log(a, b);
// }
// else {
//     a = 0;
//     b = 0;
//     console.log(a, b);
// }

//if11
// let a = 12;
// let b = 20;
// if (a !== b) {
//     if (a > b) {
//         b = a;
//         console.log(a, b);
//     }
//     else {
//         a = b;
//         console.log(a, b);
//     }
// }
// else {
//     a = 0;
//     b = 0;
//     console.log(a, b);
// }

// for (let x = 0; x < 100; x++) {
//     if (x % 3 == 0 && x % 7 == 0) {
//         console.log(x);
//     }
// }

// for (let x = 0; x < 100; x++) {
//     if (x % 9 == 0) {
//         console.log(Math.sqrt(x));
//     }
// }

// let total = 0;
// for (let y = 5; y <= 50; y++) {
//     if (y % 5 == 0) {
//         total+=y;
//     }
// }
// console.log(total);

// for (let z = 0; z <= 50; z++) {
//     console.log(z);
//     if (z == 25) break;
// }

// for (let x = 0; x < 100; x++) {
//     console.log(x);
//     if (Math.sqrt(x) == 9) break;
// }

// for (let x = 0; x <= 10; x++) {
//     if (x == 5) continue
//     console.log(x);
// }

// let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius non fugit saepe aperiam, optio consectetur asperior consequuntur placeat, totam nobis tempore quis nam quaerat illum modi, excepturi ipsum voluptates dolore."
// let counter = 0;
// for (let x = 0; x < text.length; x++) {
//     if (text[x] == "o") counter++;
// }
// console.log(counter);

// for (let x = 1; x <= 10; x++) {
//     console.log("2*" + x + "=" + 2 * x);
// }


// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         console.log(i + "*" + j + "=" + i * j);
//     }
// }

//for 1
// let k = 12;
// for (let n = 1; n < 10; n++){
//     console.log(k);
// }

//for 2
// let b = 20;
// let counter = 0;
// for (let a = 10; a <= b; a++) {
//     counter++
//     console.log(a);
// }
// console.log(counter);


// for 3
// let a = 10;
// let b =20;
// let counter = 0;
// for (let i = b; a < i; i--) {
//     counter++;
//     if (i==b) {
//         continue;
//     }
//     console.log(i);
// }
// console.log(counter);

// for4
// let price = 1000;
// for (let i = 1; i <= 10; i++) {
//     console.log(i * price);
// }

// for5
// let price = 1000;
// for (let i = 0; i <= 1; i += 0.1) {
//     console.log(Math.trunc(i * price));
// }

// for6
// let price = 1000;
// for (let i = 1.2; i <= 2; i += 0.2) {
//     console.log(Math.trunc(i * price));
// }

// for7
// let counter = 0;
// let b = 20;
// for (let a = 10; a < b; a++) {
//     counter += a;
// }
// console.log(counter)

//for8
// let counter = 1;
// let b = 20;
// for (let a = 10; a < b; a++) {
//     counter *= a;
// }
// console.log(counter);

//for9
// let counter = 0;
// let b = 20;
// for (let a = 10; a < b; a++) {
//     counter += (a**2);
// }
// console.log(counter);

// for (var i = 2; i <= 10; i++) {
//     if (i % 2 === 1) {
//         for (var j = 1; j <= 9; j++) {
//             console.log(i + "*" + j + "=" + i * j);
//         }
//     }
// }

//WHILE
// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// } 

// let i = 0;
// do {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++;
// }
// while (i < 50);

// let a = 22;
// if(true){
//     a++;
//     console.log(a);
// }
// console.log(a);

// let i = 1;
// let factorial = 1;
// while (i <= 10) {
//     factorial
//      *= i;
//     i++;
// }
// console.log(factorial);

// let a = 2;
// let summa = 5;
// while (a <= 5) {
//     summa += summa * a;
//     a++;
// }
// console.log(summa);

// let a = -12;
// let b = 3;
// let i = 1;
// let count = 0;
// while (i <= b) {
//     count++;
//     i++;
// }
// console.log(count);



// 11 october
// 1
// let number = 18;
// for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//         console.log(i);
//     }
// }

// 2
// let number = 10;
// let counter = 0
// for (let i = 1; i <= number; i++) {
//     counter += i;
// }
// console.log(counter);

// 3
// let result = "";
// let border = 5;
// for (let i = 1; i <= border; i++){
//     result += "*";
//     console.log(result);
// }

// 4
// let result = "";
// let border = 5;
// for (let i = 1; i <= border; i++) {
//     result += "*";
// }
// for (let i = border; i >= 1; i--) {
//     result = result.slice(0,i);
//     console.log(result);
// }

//5
// let n = 5;
// let m = 0;
// let result = "";
// for (let i = 0; i < 5; i++) {
//     m++;
//     n--;
//     for (let k = 0; k < n; k++) {
//         result += " ";
//     }
//     for (let j = 0; j < m; j++) {
//         result += "*";
//     }
//     result += "\n";
// } 
// console.log(result);


// 6
// let result = "";
// let border = 5;
// for (let i = 1; i <= border; i++) {
//     result += "*";
//     console.log(result);
// }
// for (let j = border-1; j >= 1; j--) {
//     result = result.slice(0,j);
//     console.log(result);
// }

// 7
// let result = "";
// let border = 5;
// for (let i = 1; i <= border; i++) {
//     result += "*";
// }
// for (let j = border; j >= 1; j--) {
//     result = result.slice(0,j);
//     console.log(result);
// }
// for (let i = 1; i < border; i++) {
//     result += "*";
//     console.log(result);
// }

// 8
// let text = "";
// for (let i = 1; i <= 9; i++) {
//     text += `${i}`
//     for (let j = 0; j > i; j++){
//         text += j;

//     }
// }console.log(text);

//14th october Functions
// function juft() {
//     for (let i = 2; i <= 50; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }

// juft();



//function's argument and parametr
// function test(a,b) {
//     console.log(a / b);
// }

// test(10,5);


// function sum(a, b) {
//     let counter = 0;
//     for (let i = a; i <= b; i++) {
//         counter += i;
//     }
//     console.log(counter);
// }

// sum(1,100);


//
// let counterNumbers = 0;
// function test2(a) {
//     for( let i = 0; i<= a; i++){
//         if (i % 2 == 0) {
//             counterNumbers += i;
//         }
//     }
//     return counterNumbers;
// } 

// let result = test2(10);
// console.log(result);

// let count = 0;

// function topJuft(son) {
//     for (let i = 0; i <= son; i++) {
//         if (i % 2 == 0) {
//             sum(i);
//         }
//     }
//     console.log(count);
// }

// function sum(juftson) {
//     count += juftson;
// }