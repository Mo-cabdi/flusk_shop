//Dark/Light Mode

const mode = document.getElementById('mode');
const body = document.querySelector('body');

const modeFunc = () => {
  mode.addEventListener('click', () =>{
 
    if (mode.classList.contains('bx-sun')){
      mode.classList.toggle('bx-moon');
      body.classList.toggle('dark')
    }
  })
}

modeFunc();
