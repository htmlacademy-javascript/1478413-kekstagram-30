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
  commentsContainer.innerHTML = '';
  const index = window.currentCommentStep * 5;
  const visibleComments = commentsArray.slice(index, index + 5);
  commentsCount.textContent = `${(window.currentCommentStep * 5) + visibleComments.length} из ${commentsArray.length} комментариев`;

  visibleComments.forEach((comment) => {
    const commentElem = renderComment(comment);
    fragment.append(commentElem);
  });

  if (visibleComments.length === commentsArray.length) {
    commentsLoader.classList.add('hidden');
  }

  if (window.currentCommentStep === 0) {
    commentsLoader.addEventListener('click' , () => {
      showComments(commentsArray);
    });
  }

  commentsContainer.append(fragment);
}

function showComments (array) {
  if ((window.currentCommentStep * 5) < array.length - 5) {
    window.currentCommentStep++;
    renderCommentsList(array);
  } else {
    commentsLoader.classList.add('hidden');
  }
}

export {renderCommentsList};
