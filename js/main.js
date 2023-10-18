//функция получения рандомного числа в диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция для возврата рандомного описания
const generateRandomComment = function (){
  const commentList = ['Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];

    const randomComment = commentList[Math.round(Math.random() * (commentList.length - 1))];
    return randomComment;
};

//функция возвращает рандомное описание
const getDescription = function () {
  const descriptionList = [
    'описание 1','описание 2','описание 3','описание 4','описание 5','описание 6','описание 7','описание 8','описание 9',
  ];
  const randomDescription = descriptionList[Math.round(Math.random() * (descriptionList.length - 1))];
  return randomDescription();
}

//функция для возврата рандомного имени
const generateRandomName = function (){
  const namesList = [
    'Иван',
    'Дмитрий',
    'Ксения',
    'Виктор',
    'Екатерина',
    'Анастасия',
    'Антон',
  ];

  const randomName = namesList [Math.round(Math.random() * (namesList.length - 1))];
  return randomName;
};

//функция для генерации одного рандомного уникального числа в диапазоне
const generateRandomLikes = function () {
  const min = 15;
  const max = 200;
  return Math.round(Math.random() * (max-min) + min);
}

//функция для возврата уникального числа по возрастанию
const createIdGenerator = function () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

//функция для создания массива описаний
const generateCommentsList = function () {
  return {
    id: createIdGenerator,
    avatar: `img/avatar${getRandomInteger(1,6)}$.svg`,
    message: generateRandomComment,
    name: generateRandomName,
  };
};

//функция для создания массива объектов
const generatePhotoDescription = function () {
  return {
    id : createIdGenerator,
    url :  `photos/${createIdGenerator}$.jpg`,
    decription : getDescription,
    likes : generateRandomLikes,
    comments: Array.from({length: getRandomInteger(1,30)}),
  }
};

const generateArrayPhotos = Array.from({length: 25}, generatePhotoDescription);
console.log(generateArrayPhotos);
