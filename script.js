
const wrapper = document.querySelector('.wrapper');
const registerLink=document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');
const from = document.querySelector('.from-box login');


registerLink.onclick=()=>{
    wrapper.classList.add('active');
}
loginLink.onclick=()=>{
    wrapper.classList.remove('active');
}
