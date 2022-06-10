export default function toggleAnswer(){
    const cards = document.querySelectorAll("[data-js=card]")
    cards.forEach((card) => {
        const answerButton = card.querySelector("[data-js=answer-button]");
        const answer = card.querySelector("[data-js=answer]");
            answerButton.addEventListener("click", () => {
                answer.classList.toggle("hide")
            })
    })
}

// Können wir endlich löschen:

// function showAnswer1(){
//     const answerButton = document.querySelector("[data-js=answer-button1]")
//     const answer = document.querySelector("[data-js=answer1]")
//     answerButton.addEventListener("click", () => {
//     answer.classList.toggle("hide")
//     })
// }
// function showAnswer2(){
//     const answerButton = document.querySelector("[data-js=answer-button2]")
//     const answer = document.querySelector("[data-js=answer2]")
//     answerButton.addEventListener("click", () => {
//     answer.classList.toggle("hide")
//     })
// }
// function showAnswer3(){
//     const answerButton = document.querySelector("[data-js=answer-button3]")
//     const answer = document.querySelector("[data-js=answer3]")
//     answerButton.addEventListener("click", () => {
//     answer.classList.toggle("hide")
//     })
// }
//
// named export:
// export { showAnswer1 as card__answer }