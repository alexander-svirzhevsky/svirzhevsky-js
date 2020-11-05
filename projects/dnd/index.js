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

document.addEventListener('mousemove', (e) => {
  // console.log(`mouse position: ${event.x}:${event.y}`)
});

export function createDiv() {}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  createItem();
});

function createItem() {
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
  newDiv.style.position = 'absolute';
  newDiv.style.top = posy + 'px';
  newDiv.style.left = posx + 'px';

  newDiv.textContent = 123;
  newDiv.classList.add('draggable-div');
  newDiv.draggable = true;

  homeworkContainer.appendChild(newDiv);
}

document.body.addEventListener('click', (e) => {
  const item = e.target;
  if (item.classList.contains('draggable-div')) {
    // const item = e.target;

    const dragStart = function () {
      setTimeout(() => {
        this.classList.add('hide');
      }, 0);
    };

    const dragEnd = function () {
      this.classList.remove('hide');
    };

    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);

    ///////////////////////

    const dragOver = function (e) {
      e.preventDefault();
    };

    const dragDrop = function () {
      // homeworkContainer.appendChild(item);
      // console.log('drop');

      document.addEventListener('mousemove', (event) => {
        // console.log(`mouse position: ${event.x}:${event.y}`)
        item.style.top = event.y + 'px';
        item.style.left = event.x + 'px';
      });
    };

    homeworkContainer.addEventListener('dragover', dragOver);
    homeworkContainer.addEventListener('drop', dragDrop);
  }
});

// document.body.addEventListener('click', (e) => {
//   if (e.target.classList === 'draggable-div') {
//     const item = e.target;
//     item.onmousedown = () => {
//       // нажатие мыши

//       //передвинуть под координаты курсора
//       function moveAt(e) {
//         item.style.left = e.pageX - item.offsetWidth / 2 + 'px';
//         item.style.top = e.pageY - item.offsetHeight / 2 + 'px';
//       }

//       // перемещать по экрану
//       document.onmousemove = function (e) {
//         moveAt(e);
//       };

//       // опускание мыши
//       item.onmouseup = function () {
//         document.onmousemove = null;
//         item.onmouseup = null;
//       };

//       item.ondragstart = function () {
//         return false;
//       };
//     };
//   }
// });
