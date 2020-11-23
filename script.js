let lightState = false;
const btnLight = document.querySelector('#turnLight');
const body = document.querySelector("body");
const firstSection = document.querySelector('.second-sec');
const title = document.querySelector('.header-first-sec');
const lightBulb = document.querySelector('.light-bulb');

const powerBtn = () => {
  if (!lightState) {
    body.classList.add("light-off");
    firstSection.style.backgroundColor = '#1b1b1b';
    title.classList.add("neon-effect");
    lightBulb.style.backgroundImage = 'url(./img/light-bulb-on.png)';
  } else {
    body.classList.remove("light-off");     
    title.classList.remove("neon-effect");
    firstSection.style.backgroundColor = '#F3F4F4';      
    lightBulb.style.backgroundImage = 'url(./img/light-bulb-off.png)'; 
  }
  console.log(lightState)
  lightState ? lightState = false : lightState = true;
  console.log("click")
}

btnLight.addEventListener("click", powerBtn);

