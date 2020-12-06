let isOn = false;

const domElements = {
  body: document.querySelector("body"),
  firstSec: document.querySelector('.second-sec'),
  title: document.querySelector('.header-first-sec'),
  lightBulb: document.querySelector('.light-bulb'),
  lightButton: document.querySelector('#turnLight'),
};

const { body, firstSec, title, lightBulb, lightButton} = domElements;

const lightOff = () => {
  body.classList.add("light-off");
  firstSec.style.backgroundColor = '#1b1b1b';
  title.classList.add("neon-effect");
  lightBulb.style.backgroundImage = 'url(./img/light-bulb-on.png)';
}

const lightOn = () => {
  body.classList.remove("light-off");     
  title.classList.remove("neon-effect");
  firstSec.style.backgroundColor = '#F3F4F4';      
  lightBulb.style.backgroundImage = 'url(./img/light-bulb-off.png)'; 
}

const lightOnOff = () => {
  if (!isOn) lightOff();
  else lightOn();
  isOn ? isOn = false : isOn = true;
}

lightButton.addEventListener("click", lightOnOff);