const pass = document.querySelector('#pass');
const confirmPass = document.querySelector('#confirm-pass');
const errorMsg = document.querySelector('.confirm-pass-msg');

confirmPass.addEventListener('input', ( e ) => {
  if ( e.target.value != pass.value ) {
    errorMsg.classList.add('error-confirm-pass');
  } else {
    errorMsg.classList.remove('error-confirm-pass');
  }
});