const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 160
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 180
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 210
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];


// - создать переменную `demoButton`, и записать в нее ссылку на кнопку с ID=demoButton
const demoButton = document.querySelector('#demoButton')


// добавить к кнопке class `button`
demoButton.classList.add('button');

// создать переменную `demoInputs`, и записать в нее ссылку на все инпуты на странице.
const demoInputs = document.querySelectorAll('input');

// для всех инпутов добавить класс `input`

// for (let i = 0; i < demoInputs.length; i++) {
//    demoInputs[i].classList.add('input');
// }

// demoInputs.forEach( input => {
//     input.classList.add('input')
// });

// сделать input "закрытым" для ввода. Для этого нам понадобится использовать атрибут `disabled`

// const styledInput = document.querySelector('.styledInput');
// styledInput.setAttribute('disabled', true);

// 2. Добавляем на кнопку обработчик клика. Задача обработчика - вывести в консоль текст "Кнопка нажата!".

// demoButton.addEventListener('click', () => console.log("Кнопка нажата!"));

// Изменяем наш обработчик. Теперь, задача нашего обработчика - управлять классом `input` у инпута с ID=nameInput. Нужно, если у инпута есть класс `input` - то удалять этот класс, а если его нет - то добавлять. Для этого есть специальный метод у свойства `classList`.
// const nameInput = document.querySelector('#nameInput')
// demoButton.addEventListener('click', () => {
//     nameInput.classList.toggle('input');
// });

// 4. Добавляем обработчик на событие ввода (`keydown`) в наш инпут с ID=nameInput. Нужно, чтобы при нажатии на клавишу, в консоль выводилось сообщение `key pressed!`

// const nameInput = document.querySelector('#nameInput')
// nameInput.addEventListener('keydown', () => {
//     console.log('key pressed!');
// });

// 5. Усложняем обработчик из п.4. Теперь нужно в консоль выводить такое: `Current input value is: ЗНАЧЕНИЕ_ИНПУТА`. Здесь нам нужно работать с объектом Event, который ожидается первым аргументом в нашей функции.

// const nameInput = document.querySelector('#nameInput')
// nameInput.addEventListener('keyup', (myEvent) => {
//     console.log('Current input value is:' + myEvent.target.value);
// });

// 6. Делаем валидацию, проверяем что инпут с именем (Name) содержит строку более чем из 3 символов. Добавляем на событие `focusout` обработчик, который проверит значение инпута. Если длина текста меньше 3 символов - добавляем инпуту класс `error-input`. Иначе - удаляем этот класс.

// nameInput.addEventListener('focusout', (event) => {
// if (event.target.value.length < 3) {
//      event.target.classList.add('error-input');
// }
// else {
//     event.target.classList.remove ('error-input')
// }
// });

// 7. Добавляем валидацию для всех инпутов. Наша задача - сделать так, чтобы при нажатии на кнопку, мы проверяли все инпуты, и если инпут пустой - то применяем к нему класс `error-input`, а если непустой - то удаляем этот класс. То есть, нам добавить ЕЩЕ ОДИН обработчик на событие клика у нашей кнопки, и в нем реализовать эти проверки.

// demoButton.addEventListener('click', () => {
//     demoInputs.forEach(input => {
//         if (input.value.length === 0) {
//             input.classList.add('error-input');
//         }
//         else {
//             input.classList.remove('error-input');
//         }
//     });
// });

// 8. Пишем функцию, которая будет выдавать приветствие. Она должна:
//  - реализовать логику из п.7 - то есть проверить все инпуты, и пометить пустые инпуты классом `error-input`
//  - если все инпуты заполнены - то вывести в алерт сообщение `Hello, SURNAME NAME MIDDLENAME`, то есть поприветствовать пользователя по ФИО.
//  - эта функция должна запускаться при клике на кнопку.

// function clickHandler() {
//     let isError = false;
//     let message = 'Hello,';
//     demoInputs.forEach( input => {
//         if(!input.value){
//             input.classList.add ('error-input');
//             isError = true;
//         }
//         else {
//             input.classList.remove ('error-input');
//             message = message + input.value + ' ';
//         }
//     });
//     if (!isError){
//         alert(message);
//     }
// }
// demoButton.addEventListener('click', clickHandler);


// --------------------------------------------------------------------


// 9. Добавляем в DOM-дерево элементы с помощью JS. Наша задача - добавить в наш контейнер с классом `demo-container` заголовок `h1` с текстом "Тестовый контейнер". Добавляем с помощью метода `append`.

const parentElem = document.querySelector('.demo-container');
const newElem = document.createElement('h1');
newElem.innerText = "Тестовый контейнер";
parentElem.append(newElem);


// 10. Теперь нам нужно, чтобы наш заголовок отображался в начале контейнера (перед всем остальным). Здесь нам поможет метод `prepend`.

parentElem.prepend(newElem);



// 11. Пишем свою функцию отрисовки товара `renderProduct`. Наша функция будет принимать в аргументе объект товара.
//  - товар рисуем в виде карточки. То есть, каждый товар - это контейнер (`div`), в котором разместим данные товара.
//  - контейнеру карточки нужно добавить класс `product-card`
//  - внутри карточки нужно разместить параграф с наименованием товара. Наименование товара - это свойство `name` объекта с данными товара. Этому параграфу добавляем класс `product-name`.
//  - параграф для отображения цены товара (свойство `price`). Параграфу добавляем класс `product-price`
// 12. Дорабатываем нашу функцию рисования карточки товара. Нужно добавить картинку с изображением товара. То есть, нам нужно создать DOM-элемент для изображения (`<img>`). Ему нужно добавить класс `product-img`. Также, нам нужно добавить этому элементу атрибут `src`, в который запишем путь к изображению (свойство `img` объекта с данными товара).
// 13. Рендерим наш список товаров в контейнер товаров. То есть, нам нужно:
//  - пройтись по массиву товаров
//  - для каждого элемента массива вызвать функцию `renderProduct`
//  - результат вызова функции (DOM-элемент), добавить в `productsContainer` (эта переменная уже есть в файле main.js).


const renderProduct = () => {
const card = document.createElement('div');
card.classList.add('product-card');
document.body.prepend(card);


products.forEach(({name, img, price, }) => {
    const nameTitle = document.createElement('p');
    const priceTitle = document.createElement('p');
    const img = document.createElement('img');
    const eachProduct = document.createElement('div');
    
    img.src = img;
    img.alt = "Some Image"
    nameTitle.textContent = `name: ${name}`;
    priceTitle.textContent = `price: ${price}`;

    eachProduct.prepend(img, nameTitle, priceTitle);
    nameTitle.classList.add('product-name');
    priceTitle.classList.add('product-price');
    img.classList.add('product-img');

    productsContainer.append(eachProduct);

})
}





