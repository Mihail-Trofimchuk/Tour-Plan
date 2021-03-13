var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map(
    'map',
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [53.3408, 31.2259], //7.58, 79.79
      zoom: 10,
    },
    {
      searchControlProvider: 'yandex#search',
    }
  );
}
