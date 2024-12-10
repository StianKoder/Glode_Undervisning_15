const nickName = document.querySelector('#name');
const age = document.querySelector('#age');
const submitButton = document.querySelector('#submit-button');
const attackButton = document.querySelector('#attack-button');

// = betyr å deklarere en variabel
// == betyr at to variabler er like men ikke i type "22" == 22
// === betyr at to variabler er like også i type 22 === 22
// > / < EKSEMPEL: 18 <== 18
// && EKSEMPEL: "Stian" === "Stian" && 28 > 18
// || EKSMEPL: nickName.value === "Per" || nickName.value === "Pål"

submitButton.addEventListener('click', function () {
  // BANLIST
  if (nickName.value === 'Per' || nickName.value === 'Pål') {
    console.log('DU ER BANNED');
    // VIP
  } else if (nickName.value === 'Stian' && age.value >= 18) {
    console.log('VELKOMMEN VIP');
  } else if (age.value >= 18) {
    console.log('Velkommen in');
  } else {
    console.log('Ingen adgang');
  }
});

attackButton.addEventListener('click', function () {
  const crit = Math.floor(Math.random() * 3) + 1;
  const damage = Math.floor(Math.random() * 10) + 1;

  const parentElement = document.querySelector('#main');

  if (crit === 1 || damage === 1) {
    const newElement = document.createElement('h3');
    newElement.textContent = 'YOU MISSED!';
    parentElement.appendChild(newElement);
  } else if (crit === 3 || damage === 10) {
    const newElement = document.createElement('h3');
    newElement.textContent =
      'Critical hit! You dealt: ' + damage * 2 + ' damage!';
    parentElement.appendChild(newElement);
  } else {
    const newElement = document.createElement('h3');
    newElement.textContent = 'You dealt: ' + damage + ' damage!';
    parentElement.appendChild(newElement);
  }
});
