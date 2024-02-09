// Определение функции для выпадающего списка
function dropdownCityContent() {
    var dropdown = document.getElementById("cityDropdown");
    dropdown.style.display = (dropdown.style.display === "block"); "none"; "block";
}

// Определение функции для выбора города и обновления текста кнопки
function selectCity(city) {
    document.getElementById("cityButton").innerText = city;
    dropdownCityContent(); // Закрываем выпадающий список после выбора
}

// Создание модального окна
var modal = document.getElementById("openWin");

// Кнопка которая открывает модальное окно
var btn = document.getElementById("postNum");

// Добавление объекта для закрытия модального окна
var span = document.getElementsByClassName("close")[0];

// Фуекцмя открытия модального окна через oneclick 
btn.onclick = function () {
    modal.style.display = "block";
}

// Опция закрытия через кнопку "х"
span.onclick = function () {
    modal.style.display = "none";
}

// Опция закрытия при клике вне модального окна
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}