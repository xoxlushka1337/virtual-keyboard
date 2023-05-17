const body = document.querySelector('.body');
body.innerHTML = `
<div class="container">
<textarea class="text" id="area" cols="30" rows="10"></textarea>
<div class="keyboard"><div class="keyboard__line"></div></div>
<div class="lang">Для смены языка используйте Shift + Alt</div>
</div>
`;

const text = document.querySelector('.text');

const keyboard = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
];
const letters = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  '[',
  ']',
  '\\',
  'Del',
  'CapsLock',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  ';',
  "'",
  'Enter',
  'Shift',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  ',',
  '.',
  '/',
  'Shift',
  'Control',
  'Meta',
  'Alt',
  ' ',
  'Alt',
  'Control',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
];
const ruLetters = [
  'Ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'Й',
  'Ц',
  'У',
  'К',
  'Е',
  'Н',
  'Г',
  'Ш',
  'Щ',
  'З',
  'Х',
  'Ъ',
  '\\',
  'CapsLock',
  'CapsLock',
  'Ф',
  'Ы',
  'В',
  'А',
  'П',
  'Р',
  'О',
  'Л',
  'Д',
  'Ж',
  'Э',
  'Enter',
  'Shift',
  'Я',
  'Ч',
  'С',
  'М',
  'И',
  'Т',
  'Ь',
  'Б',
  'Ю',
  '.',
  'Shift',
  'Control',
  'Meta',
  'Alt',
  ' ',
  'Control',
  'Alt',
  'Control',
  'ArrowLeft',
  'ArrowUp',
  'ArrowRight',
];

for (let i = 0; i < letters.length; i += 1) {
  let out = '';
  if (letters[i] === 'ArrowLeft') {
    out = `<div class="keyboard__key" data="${keyboard[i]}">&#9668;</div>`;
  } else if (letters[i] === 'ArrowRight') {
    out = `<div class="keyboard__key" data="${keyboard[i]}">&#9658;</div>`;
  } else if (letters[i] === 'ArrowUp') {
    out = `<div class="keyboard__arrow">
      <div class="keyboard__key keyboard__arrow_up" data="${
  keyboard[i]
}">&#9650;</div>
      <div class="keyboard__key keyboard__arrow_down" data="${
  keyboard[i + 1]
}">&#9660;</div>
    </div>`;
    i += 1;
  } else {
    out = `<div class="keyboard__key" data="${keyboard[i]}">${letters[
      i
    ].toLowerCase()}</div>`;
  }
  document.querySelector('.keyboard__line').innerHTML += out;
}
let letterLanguage = letters;
const keyboardKey = document.querySelectorAll('.keyboard__key');
let keyLanguage = false;

const returnObj = JSON.parse(localStorage.getItem('myKey')); // спарсим его обратно объект

const renderRussianLetters = () => {
  for (let i = 0; i < keyboardKey.length; i += 1) {
    if (keyLanguage) {
      letterLanguage = ruLetters;
      if (
        letters[i] !== 'Alt'
        && letters[i] !== 'Control'
        && letters[i] !== 'Shift'
        && letters[i] !== 'CapsLock'
        && letters[i] !== 'Del'
        && letters[i] !== 'ArrowLeft'
        && letters[i] !== 'ArrowUp'
        && letters[i] !== 'ArrowRight'
        && letters[i] !== 'ArrowDown'
        && letters[i] !== 'Tab'
        && letters[i] !== 'Space'
        && letters[i] !== 'Enter'
        && letters[i] !== 'Meta'
        && letters[i] !== 'Backspace'
      ) {
        keyboardKey[i].textContent = ruLetters[i].toLowerCase();
        const serialObj = JSON.stringify(keyLanguage); // сериализуем его в строчку
        localStorage.setItem('myKey', serialObj); // запишем его в хранилище по ключу "myKey"
      }
    } else if (
      letters[i] !== 'Alt'
      && letters[i] !== 'Control'
      && letters[i] !== 'Shift'
      && letters[i] !== 'CapsLock'
      && letters[i] !== 'Del'
      && letters[i] !== 'ArrowLeft'
      && letters[i] !== 'ArrowUp'
      && letters[i] !== 'ArrowRight'
      && letters[i] !== 'ArrowDown'
      && letters[i] !== 'Tab'
      && letters[i] !== 'Space'
      && letters[i] !== 'Enter'
      && letters[i] !== 'Meta'
      && letters[i] !== 'Backspace'
    ) {
      letterLanguage = letters;
      keyboardKey[i].textContent = letters[i].toLowerCase();
      const serialObj = JSON.stringify(keyLanguage); // сериализуем его в строчку
      localStorage.setItem('myKey', serialObj); // запишем его в хранилище по ключу "myKey"
    }
  }
};

if (localStorage.getItem('myKey') !== null) {
  keyLanguage = returnObj;
  renderRussianLetters();
} else {
  const serialObj = JSON.stringify(keyLanguage); // сериализуем его в строчку
  localStorage.setItem('myKey', serialObj); // запишем его в хранилище по ключу "myKey"
}

let flag = false;
window.onkeydown = (event) => {
  if (event.code === 'AltLeft') {
    flag = true;
    // keyLanguage = !keyLanguage;
  }
  if (event.code === 'ShiftLeft' && flag) {
    flag = false;
    keyLanguage = !keyLanguage;
    // keyLanguage = event.getModifierState('n');
    renderRussianLetters();
  }
};

let capsLockEnabled = false;
const renderCase = () => {
  if (capsLockEnabled) {
    for (let i = 0; i < keyboardKey.length; i += 1) {
      if (
        letters[i] !== 'Alt'
        && letters[i] !== 'Control'
        && letters[i] !== 'Shift'
        && letters[i] !== 'CapsLock'
        && letters[i] !== 'Del'
        && letters[i] !== 'ArrowLeft'
        && letters[i] !== 'ArrowUp'
        && letters[i] !== 'ArrowRight'
        && letters[i] !== 'ArrowDown'
        && letters[i] !== 'Tab'
        && letters[i] !== 'Space'
        && letters[i] !== 'Enter'
        && letters[i] !== 'Meta'
        && letters[i] !== 'Backspace'
      ) {
        keyboardKey[i].textContent = letterLanguage[i].toUpperCase();
      }
    }
  } else {
    for (let i = 0; i < keyboardKey.length; i += 1) {
      if (
        letters[i] !== 'Alt'
        && letters[i] !== 'Control'
        && letters[i] !== 'Shift'
        && letters[i] !== 'CapsLock'
        && letters[i] !== 'Del'
        && letters[i] !== 'ArrowLeft'
        && letters[i] !== 'ArrowUp'
        && letters[i] !== 'ArrowRight'
        && letters[i] !== 'ArrowDown'
        && letters[i] !== 'Tab'
        && letters[i] !== 'Space'
        && letters[i] !== 'Enter'
        && letters[i] !== 'Meta'
        && letters[i] !== 'Backspace'
      ) {
        keyboardKey[i].textContent = letterLanguage[i].toLowerCase();
      }
    }
  }
};

const toggleCapsLock = (event) => {
  if (event.code === 'CapsLock') {
    capsLockEnabled = event.getModifierState('CapsLock');
    renderCase();
  }
};

const clickCapsLock = (event) => {
  if (event.target.attributes.data.nodeValue === 'CapsLock') {
    capsLockEnabled = !capsLockEnabled;
    renderCase();
  }
};

keyboardKey.forEach((element) => {
  element.addEventListener('click', clickCapsLock);
});
document.addEventListener('keydown', toggleCapsLock);

const makesKeyActive = (e) => {
  // console.log(e);
  if (
    e.code === 'AltLeft'
    || e.code === 'ControlLeft'
    || e.code === 'ShiftLeft'
  ) {
    document
      .querySelector(`.keyboard__key[data="${e.code}"]`)
      .classList.add('active');
  } else {
    document.querySelectorAll('.keyboard__key').forEach((element) => {
      element.classList.remove('active');
    });
  }

  // const indexCode = keyboard.indexOf(e.code);
  // if (keyLanguage) {
  //   renderCase();
  //   text.value += ruLetters[indexCode].toLowerCase();
  // } else {
  //   renderCase();
  //   text.value += letters[indexCode].toLowerCase();
  // }
  document
    .querySelector(`.keyboard__key[data="${e.code}"]`)
    .classList.add('active');
};
document.addEventListener('keydown', makesKeyActive);

// const makesKeyActive () => {
//   document.addEventListener('keydown', (e) => {
//     document.querySelector(`.keyboard__key[data="${e.code}"]`).classList.add('active');
//     document.addEventListener('keyup', () => {
//       // document.querySelectorAll('.keyboard__key').forEach((element) => {
//       // document.classList.remove('active');
//       document.querySelector(`.keyboard__key[data="${e.code}"]`).classList.add('active');
//       // });
//     });
//   });
// }
// makesKeyActive();

document.querySelectorAll('.keyboard__key').forEach((element) => {
  element.addEventListener('click', (event) => {
    document.querySelectorAll('.keyboard__key').forEach((elements) => {
      elements.classList.remove('active');
    });

    const codeDate = event.target.attributes.data.nodeValue;
    if (
      codeDate !== 'AltLeft'
      && codeDate !== 'AltRight'
      && codeDate !== 'ControlLeft'
      && codeDate !== 'ControlRight'
      && codeDate !== 'ShiftLeft'
      && codeDate !== 'ShiftRight'
      && codeDate !== 'CapsLock'
      && codeDate !== 'Delete'
      && codeDate !== 'ArrowLeft'
      && codeDate !== 'ArrowUp'
      && codeDate !== 'ArrowRight'
      && codeDate !== 'ArrowDown'
      && codeDate !== 'Tab'
      && codeDate !== 'Space'
      && codeDate !== 'Enter'
      && codeDate !== 'MetaLeft'
      && codeDate !== 'Backspace'
    ) {
      text.value += event.target.innerText;
    }

    const start = text.selectionStart;
    const end = text.selectionEnd;

    if (codeDate === 'Backspace') {
      text.value = text.value.substring(0, start - 1) + text.value.substring(end);
    }
    if (codeDate === 'Delete') {
      text.value = text.value.slice(0, start) + text.value.slice(end);
      text.value = text.value.slice(0, start) + text.value.slice(start + 1);
    }
    if (codeDate === 'Tab') {
      const newValue = `${text.value.slice(0, start)}    ${text.value.slice(
        end,
      )}`;
      text.value = newValue;
    }
    if (codeDate === 'Space') {
      const newValue = `${text.value.slice(0, start)} ${text.value.slice(end)}`;
      text.value = newValue;
    }
    if (codeDate === 'Enter') {
      text.value = `${text.value.substring(0, start)}\n${text.value.substring(
        end,
        text.value.length,
      )}`;
    }
    if (codeDate === 'ArrowUp') {
      text.value += event.target.textContent;
    }
    if (codeDate === 'ArrowDown') {
      text.value += event.target.textContent;
    }
    if (codeDate === 'ArrowLeft') {
      text.value += event.target.textContent;
    }
    if (codeDate === 'ArrowRight') {
      text.value += event.target.textContent;
    }
    element.classList.add('active');
  });
});

const toggleTab = (event) => {
  const start = text.selectionStart;
  const end = text.selectionEnd;
  if (event.code === 'Tab') {
    const newValue = `${text.value.slice(0, start)}    ${text.value.slice(end)}`;
    text.value = newValue;
  }
};

document.addEventListener('keydown', toggleTab);
