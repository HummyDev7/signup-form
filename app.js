const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm-pass");
const errorMsg = document.querySelector(".confirm-pass-msg");
const passMsgOne = document.querySelector(".error-pass-msg");
const passMsgTwo = document.querySelector(".error-pass-msg-two");
const passMsgThree = document.querySelector(".error-pass-msg-three");
let checkUpperCase = new RegExp("(?=.*[a-z])(?=.*[A-Z])");
let checkDigit = new RegExp("(?=.*[0-9])");
let checkMinChar = new RegExp("(?=.{8,})");

//This make sure that the confirm password match the password
confirmPass.addEventListener("input", (e) => {
  if ( e.target.value != pass.value ) {
    errorMsg.classList.add("error-confirm-pass");
  } else {
    errorMsg.classList.remove("error-confirm-pass");
  }
});


pass.addEventListener("input", ( e ) => {
  if ( !checkUpperCase.test( e.target.value ) ) {
    passMsgOne.classList.add("error-password-case");
  } else {
    passMsgOne.classList.remove("error-password-case");
  }

  if ( !checkDigit.test( e.target.value ) ) {
    passMsgTwo.classList.add("error-password-num")
  } else {
    passMsgTwo.classList.remove("error-password-num");
  }

  if ( !checkMinChar.test( e.target.value ) ) {
    passMsgThree.classList.add("error-password-char");
  } else {
    passMsgThree.classList.remove('error-password-char');
  }
});
