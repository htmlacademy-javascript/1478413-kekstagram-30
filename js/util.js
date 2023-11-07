/*
 * функция для возврата рандомного значения из массива
 * @param {Array} inputArray — изначальный массив
 * @return {*} — случайный элемент массива
 */
const getRandomInteger = function(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/*
 * функция для возврата чисел по возрастанию
 * @param - без параметров
 * @return {*} — число по возрастанию от единицы
 */
const createId = function() {
  let lastGeneratedId = 0;

  return function() {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const idCreator = createId();
const urlCreator = createId();

export {getRandomInteger , idCreator , urlCreator};
