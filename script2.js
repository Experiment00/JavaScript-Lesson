// 1. Добавление элемента в конец массива
function addToEnd(array, element) {
    array.push(element);
    return array;
}
console.log(addToEnd([1, 2, 3], 4)); // [1, 2, 3, 4]

// 2. Удаление последнего элемента массива
function removeLast(array) {
    array.pop();
    return array;
}
console.log(removeLast([1, 2, 3])); // [1, 2]

// 3. Добавление элемента в начало массива
function addToStart(array, element) {
    array.unshift(element);
    return array;
}
console.log(addToStart([1, 2, 3], 0)); // [0, 1, 2, 3]

// 4. Удаление первого элемента массива
function removeFirst(array) {
    array.shift();
    return array;
}
console.log(removeFirst([1, 2, 3])); // [2, 3]

// 7. Удаление элемента из массива по индексу
function removeAtIndex(array, index) {
    array.splice(index, 1);
    return array;
}
console.log(removeAtIndex([1, 2, 3, 4], 2)); // [1, 2, 4]

// 8. Добавление элемента в массив по индексу
function addAtIndex(array, index, element) {
    array.splice(index, 0, element);
    return array;
}
console.log(addAtIndex([1, 2, 4], 2, 3)); // [1, 2, 3, 4]

// 9. Замена элемента в массиве по индексу
function replaceAtIndex(array, index, element) {
    array.splice(index, 1, element);
    return array;
}
console.log(replaceAtIndex([1, 2, 3], 1, 9)); // [1, 9, 3]

// Задача 1: Удвоение чисел в массиве
function doubleNumbers(array) {
    return array.map(num => num * 2);
}
const numbers = [2, 4, 6, 8];
console.log(doubleNumbers(numbers)); // [4, 8, 12, 16]

// Задача 2: Вытащить определённые значения из массива объектов
function getNames(users) {
    return users.map(user => user.name);
}
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];
console.log(getNames(users)); // ["Alice", "Bob", "Charlie"]

// Задача 3: Фильтрация положительных чисел
function filterPositiveNumbersArray(array) {
    return array.filter(num => num > 0);
}
const numbersForFilter = [-10, 15, 0, -7, 30, 5, -3];
console.log(filterPositiveNumbersArray(numbersForFilter)); // [15, 30, 5]

// Задача 4: Фильтрация слов по длине
function filterLongWords(array) {
    return array.filter(word => word.length > 5);
}
const words = ["apple", "banana", "cherry", "kiwi", "grape"];
console.log(filterLongWords(words)); // ["banana", "cherry"]

// Задача 5: Фильтрация строк с определённым символом
function filterWordsByCharacter(array) {
    return array.filter(word => word.includes('a'));
}
const wordsWithA = ["cat", "dog", "elephant", "tiger", "lion"];
console.log(filterWordsByCharacter(wordsWithA)); // ["cat", "elephant", "tiger"]

// 6. Сумма чисел массива
function sumArray(array) {
    return array.reduce((acc, num) => acc + num, 0);
}
const numbersToSum = [1, 2, 3, 4, 5];
console.log(sumArray(numbersToSum)); // 15

// 7. Найти самое длинное слово в массиве
function findLongestWord(array) {
    return array.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
const wordsForLongest = ["apple", "banana", "cherry", "watermelon"];
console.log(findLongestWord(wordsForLongest)); // "watermelon"

// 8. Разделение массива на части
function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}
const arrayToChunk = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
console.log(chunkArray(arrayToChunk, chunkSize)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// 9. Подсчет частоты элементов
function countFrequencies(array) {
    return array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countFrequencies(items)); // { apple: 3, banana: 2, orange: 1 }

// 10. Удаление дубликатов
function removeDuplicates(array) {
    return array.reduce((acc, item) => {
        if (!acc.includes(item)) acc.push(item);
        return acc;
    }, []);
}
const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(removeDuplicates(arrayWithDuplicates)); // [1, 2, 3, 4, 5]
