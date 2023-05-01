const body = document.querySelector('.body');
const keyboardKey = document.querySelectorAll('.keyboard__key');

body.innerHTML = `
<div class="container">
<textarea class="text" id="area" cols="30" rows="10"></textarea>
<div class="keyboard"></div>
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

let capsLockEnabled = false;

function definesKeyCase(i) {
  if (capsLockEnabled) {
    return letters[i].toUpperCase();
  }

  return letters[i].toLowerCase();
}

function render() {
  let out = '';

  for (let i = 0; i < letters.length; i += 1) {
    const keyRegister = definesKeyCase(i);
    if (letters[i] === 'ArrowLeft') {
      out += `<div class="keyboard__key" data="${keyboard[i]}">&#9668;</div>`;
    } else if (letters[i] === 'ArrowUp') {
      out += `<div class="keyboard__arrow"><div class="keyboard__key keyboard__arrow_up" data="${keyboard[i]}">&#9650;</div>`;
    } else if (letters[i] === 'ArrowDown') {
      out += `<div class="keyboard__key keyboard__arrow_down" data="${keyboard[i]}">&#9660;</div></div>`;
    } else if (letters[i] === 'ArrowRight') {
      out += `<div class="keyboard__key" data="${keyboard[i]}">&#9658;</div>`;
    } else if (
      letters[i] === 'Backspace' ||
      letters[i] === 'Del' ||
      letters[i] === 'CapsLock' ||
      letters[i] === 'Shift' ||
      letters[i] === 'Control' ||
      letters[i] === 'Meta' ||
      letters[i] === 'Enter' ||
      letters[i] === 'Tab' ||
      letters[i] === 'Alt'
    ) {
      out += `<div class="keyboard__key" data="${keyboard[i]}">${letters[i]}</div>`;
    } else {
      out += `<div class="keyboard__key" data="${keyboard[i]}">${keyRegister}</div>`;
    }
  }
  // keyboardKey.forEach(key => {
  //   key.textContent =
  // });
  document.querySelector(
    '.keyboard'
  ).innerHTML = `<div class="keyboard__line">${out}</div>`;
}
render();

function toggleCapsLock(event) {
  if (event.code === 'CapsLock') {
    capsLockEnabled = event.getModifierState('CapsLock');
    event.stopPropagation();
    render();
  }
}
document.addEventListener('keydown', toggleCapsLock);

document.onkeydown = function makesKeyActive(e) {
  if (
    e.code === 'AltLeft' ||
    e.code === 'ControlLeft' ||
    e.code === 'ShiftLeft'
  ) {
    document
      .querySelector(`.keyboard__key[data="${e.code}"]`)
      .classList.add('active');
  } else {
    document.querySelectorAll('.keyboard__key').forEach((element) => {
      element.classList.remove('active');
    });
  }
  document
    .querySelector(`.keyboard__key[data="${e.code}"]`)
    .classList.add('active');
};

document.querySelectorAll('.keyboard__key').forEach((element) => {
  // eslint-disable-next-line no-param-reassign
  element.onclick = function click(event) {
    document.querySelectorAll('.keyboard__key').forEach((elements) => {
      elements.classList.remove('active');
      // console.log(event);
    });

    const codeDate = event.target.attributes.data.nodeValue;
    if (
      codeDate !== 'AltLeft' &&
      codeDate !== 'AltRight' &&
      codeDate !== 'ControlLeft' &&
      codeDate !== 'ControlRight' &&
      codeDate !== 'ShiftLeft' &&
      codeDate !== 'ShiftRight' &&
      codeDate !== 'CapsLock' &&
      codeDate !== 'Delete' &&
      codeDate !== 'ArrowLeft' &&
      codeDate !== 'ArrowUp' &&
      codeDate !== 'ArrowRight' &&
      codeDate !== 'ArrowDown' &&
      codeDate !== 'Tab' &&
      codeDate !== 'Space' &&
      codeDate !== 'Enter' &&
      codeDate !== 'Backspace'
    ) {
      text.value += event.target.innerText;
    }

    const start = text.selectionStart;
    const end = text.selectionEnd;

    if (codeDate === 'Backspace') {
      const str = text.value;
      text.value = str.substring(0, str.length - 1);
    }
    if (codeDate === 'Delete') {
      text.value = text.value.slice(0, start) + text.value.slice(end);
      text.value = text.value.slice(0, start) + text.value.slice(start + 1);
    }
    if (event.target.innerHTML === 'Tab') {
      const newValue = `${text.value.slice(0, start)}    ${text.value.slice(
        end
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
        text.value.length
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
    this.classList.add('active');
  };
});
