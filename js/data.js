import {getRandomInteger , createId} from './util.js';

const NAMELIST = [
  'Иван',
  'Дмитрий',
  'Ксения',
  'Виктор',
  'Екатерина',
  'Анастасия',
  'Антон',
];

const COMMENTLIST= ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONLIST = [
  'описание 1',
  'описание 2',
  'описание 3',
  'описание 4',
  'описание 5',
  'описание 6',
  'описание 7',
  'описание 8',
  'описание 9',
];

const idCreator = createId();
const urlCreator = createId();

/*
 * функция для возврата чисел по возрастанию
 * @param - без параметров
 * @return {*} — объект с информацией о пользователе
 */
const generateCommentsList = function () {
  return {
    id: getRandomInteger(1,10000),
    avatar: `img/avatar${getRandomInteger(1,6)}.svg`,
    message: COMMENTLIST[getRandomInteger(0,COMMENTLIST.length - 1)],
    name: NAMELIST[getRandomInteger(0,NAMELIST.length - 1)],
  };
};

/*
 * функция для возврата чисел по возрастанию
 * @param - без параметров
 * @return {*} — объект с информацией о опубликованной фотографии
 */
const generatePhotoData = function () {
  return {
    id : idCreator(),
    url :  `photos/${urlCreator()}.jpg`,
    decription : DESCRIPTIONLIST[getRandomInteger(0,DESCRIPTIONLIST.length - 1)],
    likes : getRandomInteger(15,200),
    comments: Array.from({length: getRandomInteger(1,30)} , generateCommentsList),
  };
};

const generateArrayPhotos = Array.from({length: 25}, generatePhotoData);

export {generateArrayPhotos};
