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

// Get the modal
var modal = document.getElementById("openWin");

// Get the button that opens the modal
var btn = document.getElementById("postNum");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}