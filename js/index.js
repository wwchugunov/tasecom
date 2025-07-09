window.onload = function () {
    // Получаем все элементы services_item
    const items = document.querySelectorAll('.services_item');

    // Перебираем элементы и добавляем обработчик события hover
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            // Убираем класс active у всех элементов
            items.forEach(el => el.classList.remove('active'));

            // Добавляем класс active к текущему элементу
            item.classList.add('active');
        });
    });
}


  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });


scrollIntoView()



