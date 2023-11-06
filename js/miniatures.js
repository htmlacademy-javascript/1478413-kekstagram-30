const picturesContainer = document.querySelector('.pictures');
const picturesTepmplate = document.querySelector('#picture').content.querySelector('.picture');
/*
 * функция для возврата чисел по возрастанию
 * @param (string) url - путь к файлу
 * @param (string) description- описание фотографии
 * @param (int) likes - количество лайков
 * @param (array) comments - массив комментариев
 * @return {*} — один сгенерированный элемент фотографии
 */
//хочу обсудить деструктуризацию, не совсем понял
const renderPicture = function({ url, description, likes, comments }) {
  const pictureElement = picturesTepmplate.cloneNode(true);
  //а как правильно записать повторные две строчки ниже в одну переменную?
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
};

/*
 * функция для возврата чисел по возрастанию
 * @param (array) photos - массив сгенерированных фотографий
 * @return {*} — готовый блок добавления всех фотографий
 */
const renderAllPicture = function(pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const thumbnail = renderPicture(picture);
    fragment.append(thumbnail);
  });

  picturesContainer.append(fragment);
};

export {renderAllPicture};


