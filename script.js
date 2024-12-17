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
