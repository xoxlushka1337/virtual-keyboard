const body = document.querySelector('.body');

body.innerHTML = `
<div class="container">
<textarea class="text" id="area" cols="30" rows="10"></textarea>
<div class="keyboard"></div>
</div>
`;

const text = document.querySelector('.text');

// const keyboard = [
//   192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
//   84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75,
//   76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 91,
//   18, 32, 18, 17, 37, 38, 40, 39,
// ];
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

// function definesKeyCase(params) {}

function init() {
  let out = '';

  for (let i = 0; i < letters.length; i += 1) {
    // let keyRegister = letters[i].toLowerCase();

    if (letters[i] === 'ArrowLeft') {
      out += `
      <div class="keyboard__key" data="${keyboard[i]}">&#9668;</div>`;
    } else if (letters[i] === 'ArrowUp') {
      out += `<div class="keyboard__arrow">
      <div class="keyboard__key keyboard__arrow_up" data="${keyboard[i]}">&#9650;</div>`;
    } else if (letters[i] === 'ArrowDown') {
      out += `<div class="keyboard__key keyboard__arrow_down" data="${keyboard[i]}">&#9660;</div>
    </div>`;
    } else if (letters[i] === 'ArrowRight') {
      out += `<div class="keyboard__key" data="${keyboard[i]}">&#9658;</div>`;
    } else {
      out += `<div class="keyboard__key" data="${keyboard[i]}">${letters[i]}</div>`;
    }
  }
  document.querySelector(
    '.keyboard'
  ).innerHTML = `<div class="keyboard__line">${out}</div>`;
}
init();
let key = '';
document.onkeydown = function makesKeyActive(e) {
  // keyboard.push(e.code);
  key = e.key;
  console.log(e);
  console.log(e.keyCode);

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

      // console.log(element);
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

  // console.log(element);
});
