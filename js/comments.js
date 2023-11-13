const commentsContainer = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

function renderComment ({ avatar, name, message }) {
  const commentElement = commentsTemplate.cloneNode(true);
  const commentImg = commentElement.querySelector('.social__picture');
  commentImg.src = avatar;
  commentImg.alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
}

function renderCommentsList (commentsArray) {
  const fragment = document.createDocumentFragment();
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  commentsArray.forEach((comment) => {
    const commentElem = renderComment(comment);
    fragment.append(commentElem);
  });
  commentsContainer.append(fragment);
}

export {renderCommentsList};
