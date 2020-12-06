function typeWriter () {
  const itsMe = document.querySelector('.itsme');
  const text = "RONT END DEVELOPER";

  let i = 0;
  setInterval(() => {
    if (i < text.length) {
      itsMe.textContent += text[i];
    }
    i++;
  }, 120);
}

typeWriter();