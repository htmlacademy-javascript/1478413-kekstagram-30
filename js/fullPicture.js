//как мне импортировать не массив а функцию?
import { generateArrayPictures } from './data.js';
import { renderCommentsList } from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

/*
 * функция для проверки id миниатюры и полноразмерной фотографии
 * @param (string) id
 */
function openFullSizePicture (photoId) {
  const selectedPhoto = generateArrayPictures.find ((photo) => photo.id === photoId);
  if (selectedPhoto) {
    window.currentCommentStep = 0;
    renderBigPicture(selectedPhoto);
    closeButton.addEventListener('click', () => {
      pushCloseButton();
    });
  }
}

/*
 * функция закрытия фотографии по нажатию квиши esc
 */

function pushEscButton (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    pushCloseButton();
  }
}

/*
 * функция закрытия полноразмерной фотографии по клику на кнопку
 */

function pushCloseButton () {
  bigPicture.classList.add('hidden');
  //обработчик не удаляется
  document.removeEventListener('keydown', pushEscButton);
  //не срабатывает удаление почему-то
  document.body.classList.remove('modal-open');
}

function renderBigPicture ({ url, description, likes, comments }) {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  document.querySelector('.likes-count').textContent = likes;
  document.querySelector('.social__caption').textContent = description;
  document.addEventListener('keydown', pushEscButton);
  renderCommentsList(comments);
}

export {openFullSizePicture};
