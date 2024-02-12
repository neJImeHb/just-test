var button = document.getElementById('movingButton');

function moveButton() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    
    var randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    var randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
    
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

button.addEventListener('mouseenter', moveButton);

// Получаем форму
var form = document.getElementById('redirectForm');

// При отправке формы открываем два новых окна и закрываем текущую страницу
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    // Открываем второе окно
    window.open('second.html', '_blank');
});