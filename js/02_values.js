/** Вычисляемые типы данных в отличие от простых */

/**
 * Примитивные типы данных передаются как значения
 * Вычисляемые типы данных (объекты, массивы, функции) передаются как ссылка
 */

/**
 *  Примитивные значения
 * 
 * Все типы данных в JavaScript, кроме объектов, являются иммутабельными 
 * (значения не могут быть модифицированы, а только перезаписаны новым полным значением). 
 * Например, в JavaScript строки пересоздаются только полностью. 
 * 
 *  Примитивные типы данных:
 * 
 * - Undefined: typeof instance === "undefined"
 * - Boolean: typeof instance === "boolean"
 * - Number: typeof instance === "number"
 * - String: typeof instance === "string"
 * - BigInt: typeof instance === "bigint"
 * - Symbol: typeof instance === "symbol"
 * - Null: typeof instance === "object" // bug, but wont be fixed
*/

/** 
 *  Вычисляемый тип данных - объект (object)
 * 
 *  Все остальные типы называются «примитивными», потому что 
 *  их значениями могут быть только простые значения (будь то строка, или число, или что-то ещё). 
 *  В объектах же хранят коллекции данных или более сложные структуры.
 *  
 *  Объекты – ассоциативные массивы с рядом дополнительных возможностей.
 *  Они хранят свойства (пары ключ-значение).
 * 
 *  Примеры:
 *   - Array
 *   - Date
 *   - Set, Map
 *   - function
 *   - {}
*/

// Примитивы
let a = 42;
let b = a; // копирование значения
b++;

console.log('a', a); // 42
console.log('b', b); // 43

// Вычисляемые
let c = [1, 2, 3];
let d = c; // копирование ссылки на объект
d.push(4);

let i = [1, 2, 3, 4];

console.log('c', c); // c [ 1, 2, 3, 4 ]
console.log('d', d); // d [ 1, 2, 3, 4 ]

console.log(c === d); // true, по сути одинаковый объект
console.log(c === i); // false, разные объекты

// Пример копирования объекта для вычисляемых типов
// let e = [1, 2, 3];
// let f = e.concat(); // возвращает независимую копию объекта

