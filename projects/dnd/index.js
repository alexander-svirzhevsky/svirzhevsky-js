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

let startX = 0;
let startY = 0;

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

  return newDiv;
}

document.addEventListener('mousedown', (e) => {
  const currentDrag = e.target;

  function mouseMove(e) {
    if (currentDrag) {
      currentDrag.style.top = e.clientY - startY + 'px';
      currentDrag.style.left = e.clientX - startX + 'px';
      currentDrag.style.zIndex = 1;
    }
  }

  if (currentDrag.classList.contains('draggable-div')) {
    startX = e.offsetX;
    startY = e.offsetY;

    document.addEventListener('mousemove', mouseMove);

    document.addEventListener(
      'mouseup',
      () => {
        document.removeEventListener('mousemove', mouseMove);
        currentDrag.style.zIndex = 'initial';
      },
      { once: true }
    );
  }
});

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
