function addComment(button) {
  const commentBox = button.parentElement;
  const name = commentBox.querySelector('.name').value;
  const message = commentBox.querySelector('.message').value;
  const commentList = commentBox.querySelector('.comment-list');

  if (name === '' || message === '') {
    alert('Please enter name and comment');
    return;
  }

  const commentDiv = document.createElement('div');
  commentDiv.className = 'comment';
  commentDiv.innerHTML = `<strong>${name}:</strong> ${message}`;

  commentList.appendChild(commentDiv);

  commentBox.querySelector('.name').value = '';
  commentBox.querySelector('.message').value = '';
}
