function toggleBookmark1() {
  const bookmark = document.querySelector('[data-js=bookmark1]');
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark-button--active');
  });
}

function toggleBookmark2() {
  const bookmark = document.querySelector('[data-js=bookmark2]');
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark-button--active');
  });
}

function toggleBookmark3() {
  const bookmark = document.querySelector('[data-js=bookmark3]');
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark-button--active');
  });
}

function showAnswer1() {
  const answerButton = document.querySelector('[data-js="answer-button1"]');
  const answer = document.querySelector('[data-js="answer1"]');
  answerButton.addEventListener('click', () => {
    console.log('click', answerButton);
    answer.classList.toggle('hidden');
    answerButton.textContent = 'hide answer';
  });
}
function showAnswer2() {
  const answerButton = document.querySelector('[data-js=answer-button2]');
  const answer = document.querySelector('[data-js=answer2]');
  answerButton.addEventListener('click', () => {
    answer.classList.toggle('hidden');
  });
}
function showAnswer3() {
  const answerButton = document.querySelector('[data-js=answer-button3]');
  const answer = document.querySelector('[data-js=answer3]');
  answerButton.addEventListener('click', () => {
    answer.classList.toggle('hidden');
  });
}

toggleBookmark1();
toggleBookmark2();
toggleBookmark3();

showAnswer1();
showAnswer2();
showAnswer3();
