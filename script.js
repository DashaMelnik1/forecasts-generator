/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

let forecastBtn = document.querySelector(".forecast-btn");
let currentForecast = document.querySelector(".current-forecast");

let title = document.querySelector("h1");
let percent = document.querySelector("p");
let forecastsList = document.querySelector(".forecasts");
let cardTemplate = document.querySelector("#forecast-item");

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateNewForecast() {
    let predictionNumber = getRandomInt(0, 4);
    let predictionText = "";
    if (predictionNumber == 0) {
        predictionText = "Завтра будет хороший день!"
    } else if (predictionNumber == 1) {
        predictionText = "У тебя все получится!";
    } else if (predictionNumber == 2) {
        predictionText = "Ты закончишь курс по JS!";
    } else if (predictionNumber == 3) {
        predictionText = "Удача на твоей стороне!";
    }
    title.textContent = predictionText;

    let percentNumber = getRandomInt(0, 100);
    let predictionPercent = `${percentNumber} %`;
    percent.textContent = predictionPercent;
}

function addForecast() {
    let predict = title.textContent;
    let probability = percent.textContent;
    const myCard = cardTemplate.content.cloneNode(true);
    myCard.querySelector("h3").textContent = predict;
    myCard.querySelector("p").textContent = probability;

    if (!predict || !probability) {
        return;
    }
    forecastsList.append(myCard);
}

forecastBtn.addEventListener('click', function() {
    addForecast();
    generateNewForecast();

});

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */