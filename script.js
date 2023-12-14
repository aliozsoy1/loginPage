const container = document.getElementById('container')
const registerBtn = document.getElementById('kayitol');
const loginBtn = document.getElementById('girisyap');

registerBtn.addEventListener('click', () =>{
 container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
   });