/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let currentDrag;
let startX = 0;
let startY = 0;

document.addEventListener('mousemove', (e) => {
  if (currentDrag) {
    currentDrag.style.top = e.clientY - startY + 'px';
    currentDrag.style.left = e.clientX - startX + 'px';
    currentDrag.style.zIndex = 1;
  }
});

export function createDiv() {
  const newDiv = document.createElement('div');

  const divsize = (Math.random() * 100 + 50).toFixed();
  const color =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

  const posx = (
    Math.random() *
    (document.documentElement.clientWidth - divsize)
  ).toFixed();
  const posy = (
    Math.random() *
    (document.documentElement.clientHeight - divsize)
  ).toFixed();

  newDiv.style.width = divsize + 'px';
  newDiv.style.height = divsize + 'px';
  newDiv.style.backgroundColor = color;
  newDiv.style.top = posy + 'px';
  newDiv.style.left = posx + 'px';

  newDiv.classList.add('draggable-div');

  newDiv.addEventListener('mousedown', (e) => {
    currentDrag = newDiv;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  newDiv.addEventListener('mouseup', () => {
    currentDrag.style.zIndex = 0;
    currentDrag = false;
  });

  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});

// function createItem() {

// }

// document.body.addEventListener('click', (e) => {
//   const item = e.target;
//   if (item.classList.contains('draggable-div')) {

//     const dragStart = function () {
//       setTimeout(() => {
//         this.classList.add('hide');
//       }, 0);
//     };

//     const dragEnd = function () {
//       this.classList.remove('hide');
//     };

//     item.addEventListener('dragstart', dragStart);
//     item.addEventListener('dragend', dragEnd);

//     ///////////////////////

//     const dragOver = function (e) {
//       e.preventDefault();
//     };

//     const dragDrop = function () {
//       // homeworkContainer.appendChild(item);
//       // console.log('drop');

//       document.addEventListener('mousemove', (event) => {
//         // console.log(`mouse position: ${event.x}:${event.y}`)
//         item.style.top = event.y + 'px';
//         item.style.left = event.x + 'px';
//       });
//     };

//     homeworkContainer.addEventListener('dragover', dragOver);
//     homeworkContainer.addEventListener('drop', dragDrop);
//   }
// });
