products = [
  { id: 1, name: "Ноутбук", price: 25000, quantity: 3, isAvailable: true },
  { id: 2, name: "Смартфон", price: 18000, quantity: 5, isAvailable: true },
  { id: 3, name: "Навушники", price: 1200, quantity: 0, isAvailable: false },
  { id: 4, name: "Планшет", price: 15000, quantity: 2, isAvailable: true },
  { id: 5, name: "Монітор", price: 7000, quantity: 4, isAvailable: true },
  { id: 6, name: "Клавіатура", price: 800, quantity: 10, isAvailable: true },
  { id: 7, name: "Мишка", price: 600, quantity: 0, isAvailable: false },
  { id: 8, name: "Принтер", price: 5000, quantity: 1, isAvailable: true }
]

// --------Завдання 1 - Вивести всі назви товарів------

console.log(products.map(el => el.name));

// --------Завдання 2 - Знайти товар за конкретним id.------

console.log(products.find(el => el.id ===1));

// --------Завдання 3 - Порахувати загальну вартість всіх товарів (price * quantity).------

console.log(products.reduce((acc, el) => acc + el.quantity * el.price, 0));

// --------Завдання 4 - Порахувати, скільки всього товарів на складі (сумарна кількість).------

console.log(products.reduce((a, b) => a + b.quantity, 0));

// --------Завдання 5 - Відсортувати товари за ціною від дешевих до дорогих.------

console.log(products.sort((a, b) => a.price - b.price));

// --------Завдання 6 - Вивести всі товари, яких немає в наявності (isAvailable == false).------

console.log(products.filter(el => !el.isAvailable));

// --------Завдання 7 - Вивести товари, у яких price > 10000.------

console.log(products.filter(el => el.price > 10000));

// --------Завдання 8 - Перевірити, чи всі товари в наявності (isAvailable == true).------

console.log(products.every(el => el.isAvailable));

// --------Завдання 9 - Перевірити, чи хоча б один товар дешевший за 1000.------

console.log(products.some(el => el.price < 1000));