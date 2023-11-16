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
  const visibleComments = commentsArray.slice(0,5);
  commentsCount.textContent = `${visibleComments.length} из ${commentsArray.length} комментариев`;
  visibleComments.forEach((comment) => {
    const commentElem = renderComment(comment);
    fragment.append(commentElem);
  });

  commentsLoader.addEventListener('click' , () => {
    showComments(commentsArray);
  });
  commentsContainer.append(fragment);
}

function showComments (array) {
  const startIndex = commentsContainer.children.length;
  const nextComments = array.splice(startIndex,startIndex);
  console.log(nextComments);
  renderCommentsList(nextComments);
}

export {renderCommentsList};
