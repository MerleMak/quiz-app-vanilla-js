export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll('[data-js=bookmark]');
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--active');
    });
  });
}

// Können wir endlich löschen:

// export default function bookmark() {
// function toggleBookmark1(){
//     const bookmark = document.querySelector("[data-js=bookmark1]")
//     bookmark.addEventListener("click", () => {
//     bookmark.classList.toggle("card__bookmark--active")
//     })
// }
// function toggleBookmark2(){
//     const bookmark = document.querySelector("[data-js=bookmark2]")
//     bookmark.addEventListener("click", () => {
//     bookmark.classList.toggle("card__bookmark--active")
//     })
// }
// function toggleBookmark3(){
//     const bookmark = document.querySelector("[data-js=bookmark3]")
//     bookmark.addEventListener("click", () => {
//     bookmark.classList.toggle("card__bookmark--active")
//     })
// }
//
// toggleBookmark1();
// toggleBookmark2();
// toggleBookmark3();
// }
