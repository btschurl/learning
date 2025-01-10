document.addEventListener("keydown", (event) => {
  const key = event.key;
  const code = event.code;
  const keyCode = event.keyCode;
  const keyName = event.keyIdentifier;
  const keyInfo = document.querySelector(".keyInfo");
  keyInfo.textContent = `You've pressed - ${key}`;
  document.body.appendChild(keyInfo);
});
