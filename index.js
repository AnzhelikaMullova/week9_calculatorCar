// Определение базового класса Transport
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  // Метод для получения информации о транспорте
  getInfo() {
    return `Тип: ${this.type}, Brand: ${this.brand}`;
  }

  // Метод для получения цены 
  getPrice() {
    return `Цена: $${this.price}`;
  }
}

// Класс Car наследующийся от Transport
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  // Метод для получения количества дверей
  getDoorsCount() {
    return `Doors: ${this.doors}`;
  }
}

// Класс Bike, наследующийся от Transport
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  // Метод для получения максимальной скорости
  getMaxSpeed() {
    return `Максимальная скорость: ${this.maxSpeed} km/h`;
  }
}


const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image: "https://realnoevremya.ru/uploads/news/51/1f/cdfe7b34f9e360b1.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFybGV5JTIwZGF2aWRzb258ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

// Получаем ссылку на контейнер для транспортных средств
const app = document.getElementById("app");

// Перебор по каждому элементу 
data.forEach((item) => {
  let vehicle;

  if (item.type === "car") { // Проверяем тип транспортного средства
    vehicle = new Car(item.type, item.price, item.brand, item.doors);   // Создаем экземпляр класса Car для автомобилей
  } else if (item.type === "bike") { // Создаем экземпляр класса Bike для мотоциклов
    vehicle = new Bike(item.type, item.price, item.brand, item.maxSpeed);
  }

  // Создаем контейнер для карточки транспортного средства
  const card = document.createElement("div");

  // Создаем элемент img для отображения изображения
  const image = document.createElement("img");
  image.src = item.image;
  card.appendChild(image);

  // Создаем элемент для информации о транспортном средстве
  const info = document.createElement("p");
  info.textContent = vehicle.getInfo();
  card.appendChild(info);

  // Создаем элемент p для отображения цены транспортного средства
  const price = document.createElement("p");
  price.textContent = vehicle.getPrice();
  card.appendChild(price);

  // Проверяем тип транспортного средства
  if (vehicle instanceof Car) { // instanceof ссылаемся на класс
    // Для автомобилей добавляем элемент p для отображения количества дверей
    const doorsCount = document.createElement("p");
    doorsCount.textContent = vehicle.getDoorsCount();
    card.appendChild(doorsCount);
  } else if (vehicle instanceof Bike) {
    // Для велосипедов добавляем элемент p для отображения максимальной скорости
    const maxSpeed = document.createElement("p");
    maxSpeed.textContent = vehicle.getMaxSpeed();
    card.appendChild(maxSpeed);
  }

  // Добавляем карточку транспортного средства в контейнер
  app.appendChild(card);
});