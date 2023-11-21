import { openFullSizePicture } from './fullPicture.js';

const picturesContainer = document.querySelector('.pictures');
const picturesTepmplate = document.querySelector('#picture').content.querySelector('.picture');
//const bigPicturePreview = document.querySelector('.big-picture__preview');
/*
 * функция для генерации одной миниатюры
 * @param (string) url - путь к файлу
 * @param (string) description- описание фотографии
 * @param (int) likes - количество лайков
 * @param (array) comments - массив комментариев
 * @return {*} — один сгенерированный элемент фотографии
 */
function renderPicture ({ url, description, likes, comments, id}) {
  const pictureElement = picturesTepmplate.cloneNode(true);
  const imgElement = pictureElement.querySelector('.picture__img');
  imgElement.src = url;
  imgElement.alt = description;
  imgElement.dataset.id = id;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.addEventListener('click' , () => openFullSizePicture(id));
  return pictureElement;
}

/*
 * функция для отрисовки всех миниатюр из массива
 * @param (array) pictures - массив
 */
const renderAllPictures = function(pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const thumbnail = renderPicture(picture);
    fragment.append(thumbnail);
  });

  picturesContainer.append(fragment);
};

export {renderAllPictures , renderPicture};


