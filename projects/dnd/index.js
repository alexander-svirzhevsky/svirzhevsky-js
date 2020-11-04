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

document.addEventListener('mousemove', (e) => {});

export function createDiv() {}

const addDivButton = homeworkContainer.querySelector('#addDiv');

const divItem = document.querySelector('.new_div');

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
  newDiv.classList.add('new_div');
  newDiv.draggable = true;

  document.body.append(newDiv);
}

divItem.addEventListener('click', () => {
  console.log('click!!');
});
