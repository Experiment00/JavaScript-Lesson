// Задача 1: Создание объекта с методом
const person = {
  name: "Иван",
  age: 30,
  greet() {
    return `Привет, меня зовут ${this.name}, мне ${this.age} лет`;
  }
};
console.log(person.greet());

// Задача 2: Изменение значения в объекте
const book = {
  title: "Война и мир",
  author: "Лев Толстой",
  updateTitle(newTitle) {
    this.title = newTitle;
  }
};
book.updateTitle("Анна Каренина");
console.log(book.title);

// Задача 3: Добавление свойства в объект
const student = {
  name: "Анна",
  age: 22,
  grades: [4, 5, 3],
  addGrade(grade) {
    this.grades.push(grade);
  }
};
student.addGrade(5);
console.log(student.grades);

// Задача 4: Удаление свойства объекта
const car = {
  brand: "Toyota",
  model: "Corolla",
  removeModel() {
    delete this.model;
  }
};
car.removeModel();
console.log(car.model);

// Задача 5: Метод для получения полной информации
const movie = {
  title: "Интерстеллар",
  director: "Кристофер Нолан",
  releaseYear: 2014,
  getFullInfo() {
    return `Фильм: ${this.title}, Режиссер: ${this.director}, Год выпуска: ${this.releaseYear}`;
  }
};
console.log(movie.getFullInfo());

// Задача 6: Изменение значения по ключу
const person2 = {
  name: "Максим",
  age: 28,
  updateAge(newAge) {
    this.age = newAge;
  }
};
person2.updateAge(35);
console.log(person2.age);

// Задача 7: Проверка наличия свойства в объекте
const product = {
  name: "Laptop",
  price: 1500,
  hasProperty(prop) {
    return this.hasOwnProperty(prop);
  }
};
console.log(product.hasProperty("price"));

// Задача 8: Итерация по ключам объекта
const person3 = {
  name: "Елена",
  age: 25,
  city: "Москва",
  showKeys() {
    return Object.keys(this);
  }
};
console.log(person3.showKeys());

// Задача 9: Вывод значений объекта
const car2 = {
  brand: "BMW",
  model: "X5",
  showValues() {
    return Object.values(this);
  }
};
console.log(car2.showValues());

// Задача 10: Проверка типа значения
const data = {
  name: "Сергей",
  age: 30,
  isNameString() {
    return typeof this.name === "string";
  }
};
console.log(data.isNameString());

// Задача 11: Модификация массива в объекте
const student2 = {
  name: "Ирина",
  grades: [4, 5, 3],
  addGrade(newGrade) {
    this.grades.push(newGrade);
  }
};
student2.addGrade(4);
console.log(student2.grades);

// Задача 12: Вычисление суммы всех значений в объекте
const expenses = {
  food: 200,
  transport: 50,
  entertainment: 100,
  getTotalExpenses() {
    return Object.values(this).reduce((sum, value) => sum + value, 0);
  }
};
console.log(expenses.getTotalExpenses());

// Задача 13: Проверка всех значений
const user = {
  isActive: true,
  hasPermission: true,
  hasValidStatus() {
    return this.isActive && this.hasPermission;
  }
};
console.log(user.hasValidStatus());

// Задача 14: Копирование объекта
const original = {
  name: "Кирилл",
  age: 32,
  clone() {
    return { ...this };
  }
};
console.log(original.clone());

// Задача 15: Преобразование объекта в строку
const person4 = {
  name: "Ольга",
  age: 26,
  city: "Санкт-Петербург",
  toString() {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
  }
};
console.log(person4.toString());
