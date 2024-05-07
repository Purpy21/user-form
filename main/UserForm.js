var pass1 = document.getElementById('pass');
var pass2 = document.getElementById('confpass');
var form = document.querySelector('form');
var invalid = document.querySelector('.invalid-text');
var invalidMsg = '';

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if(pass1.value !== pass2.value) {
        invalidMsg = 'Passwords do not match!';
        invalid.innerHTML = invalidMsg;
        pass1.classList.add('invalid');
        pass2.classList.add('invalid');
    }
})

function removeInvalid() {
    invalidMsg = '';
    invalid.innerHTML = invalidMsg;
    pass1.classList.remove('invalid');
    pass2.classList.remove('invalid');
}

pass1.addEventListener('focus', removeInvalid);
pass2.addEventListener('focus', removeInvalid);
