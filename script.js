let isOn = false;

const domElements = {
  body: document.querySelector("body"),
  firstSec: document.querySelector('.second-sec'),
  title: document.querySelector('.header-first-sec'),
  lightBulb: document.querySelector('.light-bulb'),
  lightButton: document.querySelector('#turnLight'),
  arrowLightBulb: document.querySelector('.arrow-light-bulb')
};

const { body, firstSec, title, lightBulb, lightButton, arrowLightBulb} = domElements;

const lightOff = () => {
  body.classList.add("light-off");
  firstSec.style.backgroundColor = '#1b1b1b';
  title.classList.add("neon-effect");
  lightBulb.style.backgroundImage = 'url(./img/light-bulb-on.png)';

  // Add shadow to arrow and bulb
  lightBulb.classList.add('lightBulb-shade');
  arrowLightBulb.classList.add('arrow-light-bulb-shade');
}

const lightOn = () => {
  body.classList.remove("light-off");     
  title.classList.remove("neon-effect");
  firstSec.style.backgroundColor = '#F3F4F4';      
  lightBulb.style.backgroundImage = 'url(./img/light-bulb-off.png)'; 

  // Remove shadow to arrow and bulb
  lightBulb.classList.remove('lightBulb-shade');
  arrowLightBulb.classList.remove('arrow-light-bulb-shade');
}

const lightOnOff = () => {
  if (!isOn) lightOff();
  else lightOn();
  isOn ? isOn = false : isOn = true;
}

lightButton.addEventListener("click", lightOnOff);