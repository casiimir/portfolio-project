function typeWriter () {
  const text = "RONT END DEVELOPER";
  const itsMe = document.querySelector('.itsme');
  itsMe.textContent = 'F';

  let i = 0;
  setInterval(() => {
    if (i < text.length) {
      itsMe.textContent += text[i];
    }
    i++;
  }, 120);
}

typeWriter();