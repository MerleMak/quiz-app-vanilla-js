export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll("[data-js='bookmark']");
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('bookmark-button--active');
    });
  });
}

// export default function toggleBookmark() {
//   function toggleBookmark1() {
//     const bookmark = document.querySelector('[data-js=bookmark1]');
//     bookmark.addEventListener('click', () => {
//       bookmark.classList.toggle('bookmark-button--active');
//     });
//   }

//   function toggleBookmark2() {
//     const bookmark = document.querySelector('[data-js=bookmark2]');
//     bookmark.addEventListener('click', () => {
//       bookmark.classList.toggle('bookmark-button--active');
//     });
//   }

//   function toggleBookmark3() {
//     const bookmark = document.querySelector('[data-js=bookmark3]');
//     bookmark.addEventListener('click', () => {
//       bookmark.classList.toggle('bookmark-button--active');
//     });
//   }

//   toggleBookmark1();
//   toggleBookmark2();
//   toggleBookmark3();
// }

// export { toggleBookmark1, toggleBookmark2, toggleBookmark3 };
