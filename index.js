const body = document.querySelector('.body');

body.innerHTML = `
<div class="container">
<textarea class="text" id="area" cols="30" rows="10"></textarea>
<div class="keyboard"></div>
</div>
`;

const text = document.querySelector('.text');

const keyboard = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
  84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75,
  76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 91,
  18, 32, 18, 17, 37, 38, 40, 39,
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
function init() {
  let out = '';

  for (let i = 0; i < letters.length; i += 1) {
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
document.onkeydown = function makesKeyActive(e) {
  // keyboard.push(e.keyCode);
  console.log(e.keyCode);

  if (e.keyCode === 18 || e.keyCode === 17 || e.keyCode === 16) {
    document
      .querySelector(`.keyboard__key[data="${e.keyCode}"]`)
      .classList.add('active');
  } else {
    document.querySelectorAll('.keyboard__key').forEach((element) => {
      element.classList.remove('active');

      // console.log(element);
    });
  }
  document
    .querySelector(`.keyboard__key[data="${e.keyCode}"]`)
    .classList.add('active');
};

document.querySelectorAll('.keyboard__key').forEach((element) => {
  // eslint-disable-next-line no-param-reassign
  element.onclick = function click(event) {
    document.querySelectorAll('.keyboard__key').forEach((elements) => {
      elements.classList.remove('active');
      // console.log(event);
    });

    const code = event.target.attributes.data.nodeValue;
    if (
      code !== '18' &&
      code !== '17' &&
      code !== '16' &&
      code !== '20' &&
      code !== '46' &&
      code !== '37' &&
      code !== '38' &&
      code !== '39' &&
      code !== '40' &&
      code !== '9' &&
      code !== '32' &&
      code !== '13' &&
      code !== '8'
    ) {
      text.value += String.fromCharCode(code);
    }

    const start = text.selectionStart;
    const end = text.selectionEnd;

    if (event.target.innerHTML === 'Backspace') {
      const str = text.value;
      text.value = str.substring(0, str.length - 1);
    }
    if (event.target.innerHTML === 'Del') {
      text.value = text.value.slice(0, start) + text.value.slice(end);
      text.value = text.value.slice(0, start) + text.value.slice(start + 1);
    }
    if (event.target.innerHTML === 'Tab') {
      const newValue = `${text.value.slice(0, start)}    ${text.value.slice(
        end
      )}`;
      text.value = newValue;
    }
    if (code === '32') {
      const newValue = `${text.value.slice(0, start)} ${text.value.slice(end)}`;
      text.value = newValue;
    }
    if (code === '13') {
      text.value = `${text.value.substring(0, start)}\n${text.value.substring(
        end,
        text.value.length
      )}`;
      start;
    }
    if (code === '38') {
      text.value += event.target.textContent;
    }
    if (code === '40') {
      text.value += event.target.textContent;
    }
    if (code === '37') {
      text.value += event.target.textContent;
    }
    if (code === '39') {
      text.value += event.target.textContent;
    }
    this.classList.add('active');
  };

  // console.log(element);
});
