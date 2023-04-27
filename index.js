const body = document.getElementsByTagName("body");

document.body.innerHTML = `
<div class="container">
<textarea class="text" name="" id="" cols="30" rows="10"></textarea>
<div class="keyboard"></div>
</div>
`;

const keyboard = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82,
  84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,
  186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 91, 18,
  32, 18, 17, 37, 38, 40, 39,
];
const letters = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "\\",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  " ",
  "Alt",
  "Control",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
];
function init() {
  let out = "";

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "Backspace") {
      out += ` <div class="keyboard__key keyboard__key_more" data="${keyboard[i]}">${letters[i]}</div>`;
    } else if (letters[i] === "Tab") {
      out += `<div class="keyboard__key keyboard__key_row2"  data="${keyboard[i]}">Tab</div>`;
    } else if (letters[i] === "CapsLock") {
      out += `<div class="keyboard__key keyboard__key_row3" data="${keyboard[i]}">Caps</div>`;
    } else if (letters[i] === "Enter") {
      out += `<div class="keyboard__key keyboard__key_row3" data="${keyboard[i]}">Enter</div>`;
    } else if (letters[i] === "Shift") {
      out += `<div class="keyboard__key keyboard__key_row4" data="${keyboard[i]}">Shift</div>`;
    } else if (letters[i] === " ") {
      out += ` <div class="keyboard__key keyboard__key_space" data="${keyboard[i]}"></div>`;
    } else if (letters[i] === "ArrowLeft") {
      out += `
      <div class="keyboard__key" data="${keyboard[i]}">
      <img
        class="keyboard__pointer keyboard__pointer_left"
        src="./imgs/pointer.png"
        alt=""
      />
      </div>`;
    } else if (letters[i] === "ArrowUp") {
      out += `<div class="keyboard__arrow">
      <div class="keyboard__key keyboard__arrow_up" data="${keyboard[i]}">
      <img class="keyboard__pointer " src="./imgs/pointer.png" alt="" />
    </div>`;
    } else if (letters[i] === "ArrowDown") {
      out += `<div class="keyboard__key keyboard__arrow_down" data="${keyboard[i]}">
      <img
        class="keyboard__pointer keyboard__pointer_down"
        src="./imgs/pointer.png"
        alt=""
      />
    </div>
    </div>`;
    } else if (letters[i] === "ArrowRight") {
      out += `<div class="keyboard__key" data="${keyboard[i]}">
      <img
        class="keyboard__pointer keyboard__pointer_right"
        src="./imgs/pointer.png"
        alt=""
      />
    </div>`;
    } else {
      out += `<div class="keyboard__key" data="${keyboard[i]}">${letters[i]}</div>`;
    }
  }
  document.querySelector(
    ".keyboard"
  ).innerHTML = `<div class="keyboard__line">${out}</div>`;
}
init();
