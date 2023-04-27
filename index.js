// CHARACTERS
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 
'g', 'h', 'i', 'j', 'k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't',
 'u', 'v', 'w', 'x', 'y', 'z']

let capitalLetters = ["A", "B", "C", "D", "E", 
 "F", "G", "H", "I", "J",
 "K", "L", "M", "N", "O",
 "P", "Q", "R", "S", "T", 
 "U", "V", "W", "X", "Y", "Z"
]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// this is the one without punc
let all = [letters, capitalLetters, numbers]

// the password with punc
let punctuations = [".", "_", "@", "!", "?"]
let all2 = [letters, capitalLetters, numbers, punctuations ]

// here is the generated password
let passwordEl = document.getElementById("password-el")

// for buttons
let generateButton = document.getElementById("generateButton")
let punctuationButton = document.getElementById("punctuationButton")

// this part is for taking number of characters as input
let numberInput = document.getElementById("numberInput");

// warning for number of characters
let warningEl = document.getElementById("warning-el")

// when length is zero
let lengthZero = document.getElementById("length-zero")

// this is the one without punctuation
// generateButton.addEventListener("click", function() {
//     let i = 0
//     let passwordd = " "
//     let maxLength = parseInt(document.getElementById("numberInput").value);
//     if (maxLength > 32) {
//       warningEl.textContent = "The maximum number of characters is 32 !"
//       lengthZero.textContent = ""
//       passwordEl.textContent = ""
//     } else if(maxLength === 0) {
//       lengthZero.textContent = "Length is not defined !"
//       warningEl.textContent = ""
//       passwordEl.textContent = ""
//     } else {
//       while (i < maxLength) {
//           let for_list = all[ Math.floor(Math.random() * all.length) ] ;
//           let key = for_list[ Math.floor(Math.random() * for_list.length) ] ;
//           passwordd += key ;
//           i++ ;
//       }
//       passwordEl.textContent = passwordd
//       lengthZero.textContent = ""
//       warningEl.textContent = ""
//     } 
//     if (warningEl !==  "The maximum number of characters is 32 !") {
//       toggleCopyButton();
//     }
// })


// the password with punctuation
// punctuationButton.addEventListener("click", function() {
//     let i = 0
//     let passwordd2 = " "
//     let maxLength = parseInt(document.getElementById("numberInput").value);
//     if (maxLength > 32) {
//       warningEl.textContent = "The maximum number of characters is 32 !"
//       lengthZero.textContent = "";
//       passwordEl.textContent = ""
//     } else if(maxLength === 0) {
//       lengthZero.textContent = "Length is not defined !"
//       warningEl.textContent = "";
//       passwordEl.textContent = ""
//     } else {
//       while (i < maxLength) {
//           let for_list = all2[ Math.floor(Math.random() * all2.length) ] ;
//           let key = for_list[ Math.floor(Math.random() * for_list.length) ] ;
//           passwordd2 += key ;
//           i++ ;
//       }
//       passwordEl.textContent = passwordd2
//       lengthZero.textContent = ""
//       warningEl.textContent = ""
//     }
//     if (warningEl !==  "The maximum number of characters is 32 !") {
//       toggleCopyButton();
//     }
// })

// this part is for copy button
function copyPassword() {
    navigator.clipboard.writeText(passwordEl.textContent);

  }

function toggleCopyButton() {
  const copyButton = document.getElementById("copy-button");
  const messageEl = document.getElementById("message");

  if (passwordEl.textContent) {
    copyButton.style.display = "block";
    copyButton.addEventListener("click", function() {
      navigator.clipboard.writeText(passwordEl.textContent)
        .then(() => {
          messageEl.textContent = "Copied the password!";
          messageEl.style.display = "block";
          setTimeout(() => {
            messageEl.style.display = "none";
            messageEl.textContent = "";
          }, 3000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  } else {
    copyButton.style.display = "none";
  }
}
  
// reloading the page with the title
const titleEl = document.querySelector("h1");
titleEl.addEventListener("click", function() {
  location.reload();
});

// refresh the page with the button
const refresh = document.getElementById("refresh");
refresh.addEventListener("click", function() {
  location.reload();
});


// selecting filters 
let number = document.getElementById("number")
let letter = document.getElementById("letter")
let capitalized = document.getElementById("capitalized")
let punctuation = document.getElementById("punctuation")


// generate button 

generateButton.addEventListener("click", function() {
  let i = 0
  let passwordd = " "
  let maxLength = parseInt(document.getElementById("numberInput").value);

  let selectedFeatures = [];

  if (number.checked) {
    selectedFeatures.push(numbers);
  }
  if (letter.checked) {
    selectedFeatures.push(letters);
  }
  if (capitalized.checked) {
    selectedFeatures.push(capitalLetters);
  }
  if (punctuation.checked) {
    selectedFeatures.push(punctuations);
  }

  if (maxLength > 32) {
    warningEl.textContent = "The maximum number of characters is 32 !"
    lengthZero.textContent = ""
    passwordEl.textContent = ""
  } else if(maxLength === 0) {
    lengthZero.textContent = "Length is not defined !"
    warningEl.textContent = ""
    passwordEl.textContent = ""
  } else if (selectedFeatures.length === 0) {
    warningEl.textContent = "Please select at least one feature for the password."
    lengthZero.textContent = ""
    passwordEl.textContent = ""
  } else {
    while (i < maxLength) {
      let for_list = selectedFeatures[ Math.floor(Math.random() * selectedFeatures.length) ];
      let key = for_list[ Math.floor(Math.random() * for_list.length) ] ;
      passwordd += key ;
      i++ ;
    }
    passwordEl.textContent = passwordd
    lengthZero.textContent = ""
    warningEl.textContent = ""
  }

  if (warningEl !==  "The maximum number of characters is 32 !" && selectedFeatures.length > 0 && warningEl == "Please select at least one feature for the password.") {
    toggleCopyButton();
  }
})


