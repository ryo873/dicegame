var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);
console.log("-----------");
var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomNumber5 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber3);
console.log(randomNumber5);

if (randomNumber1 === 1) {
  document.querySelector("div div img").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector("div div img").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector("div div img").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector("div div img").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector("div div img").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6) {
  document.querySelector("div div img").setAttribute("src", "images/dice6.png");
}

if (randomNumber2 === 1) {
  document.querySelectorAll("div div img")[1].setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelectorAll("div div img")[1].setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelectorAll("div div img")[1].setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelectorAll("div div img")[1].setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelectorAll("div div img")[1].setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6) {
  document.querySelectorAll("div div img")[1].setAttribute("src", "images/dice6.png");
}

// var taruhanPembeli = "Selamat anda menang";
// function test() {
//   return "Pembeli Menang";
// }

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Win";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Win";
}

// var taruhan = String(prompt("Silahkan masukkan pilihan anda Dadu 1 atau Dadu 2")).toLowerCase();
// if (taruhan === "dadu 1") {
//   if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").innerHTML = "Draw";
//   } else if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Wow anda beruntung😍";
//   } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Maaf anda kurang beruntung😥";
//   }
// } else if (taruhan === "dadu 2") {
//   if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").innerHTML = "Draw";
//   } else if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Maaf anda kurang beruntung😥";
//   } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Wow anda beruntung😍";
//   }
// } else {
//   alert("Anda salah memasukkan pilihan");
// }

function fibonacci(n) {
  let output = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      output.push(0);
    } else if (i === 1) {
      output.push(1);
    } else if (i > 1) {
      output.push(output[i - 1] + output[i - 2]);
    }
  }
  return output;
}

// let outputFizzBuzz = [];

// function fizzBuzz(){
//   for(let i = 1; i<outputFizzBuzz.length;i++){
//     if()
//   }
// }
