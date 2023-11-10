import { generateArrayPictures } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const picturesTepmplate = document.querySelector('#picture').content.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture__img');
/*
 * функция для возврата чисел по возрастанию
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

function openFullSizePicture (photoId) {
  const selectedPhoto = generateArrayPictures.find ((photo) => photo.id === photoId);
  if (selectedPhoto) {
    console.log(selectedPhoto);
    renderBigPicture(selectedPhoto);
  }
}

function renderBigPicture ({ url, description, likes }) {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('big-picture__img').src = url;
  bigPicture.querySelector('big-picture__img').alt = description;
  bigPicture.querySelector('likes-count').textContent = likes;
  bigPicture.querySelector('social__caption').textContent = description;


}

/*
 * функция для возврата чисел по возрастанию
 * @param (array) photos - массив сгенерированных фотографий
 * @return {*} — готовый блок добавления всех фотографий
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


