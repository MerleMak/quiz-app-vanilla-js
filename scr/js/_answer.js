export default function toggleAnswer() {
  const cards = document.querySelectorAll('[data-js=question__card]');
  cards.forEach((card) => {
    const answerButton = card.querySelector('[data-js=answer__button]');
    const answer = card.querySelector('[data-js=answer]');
    answerButton.addEventListener('click', () => {
      answer.classList.toggle('hidden');
    });
  });
}

// export function showAnswer1() {
//   const answerButton = document.querySelector('[data-js="answer-button1"]');
//   const answer = document.querySelector('[data-js="answer1"]');
//   answerButton.addEventListener('click', () => {
//     console.log('click', answerButton);
//     answer.classList.toggle('hidden');
//   });
// }
// export function showAnswer2() {
//   const answerButton = document.querySelector('[data-js=answer-button2]');
//   const answer = document.querySelector('[data-js=answer2]');
//   answerButton.addEventListener('click', () => {
//     answer.classList.toggle('hidden');
//   });
// }
// export function showAnswer3() {
//   const answerButton = document.querySelector('[data-js=answer-button3]');
//   const answer = document.querySelector('[data-js=answer3]');
//   answerButton.addEventListener('click', () => {
//     answer.classList.toggle('hidden');
//   });
// }
