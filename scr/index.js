function toggleBookmark1(){
    const bookmark = document.querySelector("[data-js=bookmark1]")
    bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--active")
    })
}

function toggleBookmark2(){
    const bookmark = document.querySelector("[data-js=bookmark2]")
    bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--active")
    })
}

function toggleBookmark3(){
    const bookmark = document.querySelector("[data-js=bookmark3]")
    bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--active")
    })
}

function showAnswer1(){
    const answerButton = document.querySelector("[data-js=answer-button1]")
    const answer = document.querySelector("[data-js=answer1]")
    answerButton.addEventListener("click", () => {
    answer.classList.toggle("hide")
    })
}
function showAnswer2(){
    const answerButton = document.querySelector("[data-js=answer-button2]")
    const answer = document.querySelector("[data-js=answer2]")
    answerButton.addEventListener("click", () => {
    answer.classList.toggle("hide")
    })
}
function showAnswer3(){
    const answerButton = document.querySelector("[data-js=answer-button3]")
    const answer = document.querySelector("[data-js=answer3]")
    answerButton.addEventListener("click", () => {
    answer.classList.toggle("hide")
    })
}

toggleBookmark1();
toggleBookmark2();
toggleBookmark3();

