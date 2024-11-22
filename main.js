// class Utility {
//     static toUpperCase(str) {
//         return str.toUpperCase();
//     }

//     static reverseString(str) {
//         return str.split("").reverse().join("");
//     }

//     static isEven(num) {
//         return num % 2 === 0;
//     }

//     static capitalize(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }

//     static randomInRange(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// }


// console.log("Uppercase:", Utility.toUpperCase("hello"));
// console.log("Reverse String:", Utility.reverseString("world"));
// console.log("Is Even:", Utility.isEven(10));
// console.log("Capitalize:", Utility.capitalize("javaScript"));
// console.log("Random Number (1-10):", Utility.randomInRange(1, 10));


















// class Car {
//     constructor() {
//         this.speed = 0;
//         this.fuelConsumption = 0.1;
//     }

//     start() {
//         console.log("Mashina ishga tushdi!");
//     }

//     move() {
//         if (this.speed > 0) {
//             console.log(`Mashina ${this.speed} km/soat tezlikda harakatlanmoqda.`);
//         } else {
//             console.log("Mashina harakatlanmayapti. Tezlikni oshiring.");
//         }
//     }

//     gas(increment) {
//         this.speed += increment;
//         console.log(`Tezlik oshirildi: ${this.speed} km/soat.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log("Mashina to'xtatildi.");
//     }

//     consumption(distance) {
//         const fuel = distance * this.fuelConsumption;
//         console.log(`Masofa: ${distance} km, Sarflangan benzin: ${fuel.toFixed(2)} litr.`);
//     }
// }

// const myCar = new Car();
// myCar.start();
// myCar.gas(50); 
// myCar.move(); 
// myCar.consumption(200);
// myCar.stop();