
  document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".payment-solutions-btn__item");
  const modals = document.querySelectorAll(".payment-solutions-modal");
  const modalsContainer = document.querySelectorAll(".payment-solutions-btn-box")[1]; // вторая .payment-solutions-btn-box — там модалки
  const buttonsBox = document.querySelectorAll(".payment-solutions-btn-box")[0]; // первая — там кнопки

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;

      // Скрыть кнопки
      buttonsBox.style.display = "none";

      // Показать нужную модалку
      modals.forEach(modal => {
        if (modal.dataset.id === id) {
          modal.style.display = "block";
        } else {
          modal.style.display = "none";
        }
      });
    });
  });

  modals.forEach(modal => {
    const closeBtn = modal.querySelector(".payment-solutions-modal-btn-close");

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      buttonsBox.style.display = "grid"; // или "flex", если у тебя flex
    });
  });
});



// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".payment-solutions-btn__item");
//   const modals = document.querySelectorAll(".payment-solutions-modal");
//   const modalsContainer = document.querySelectorAll(".payment-solutions-btn-box")[1];
//   const buttonsBox = document.querySelectorAll(".payment-solutions-btn-box")[0];

//   buttons.forEach(button => {
//     const id = button.dataset.id;

//     button.addEventListener("mouseenter", () => {
//       // Скрываем кнопки
//       buttonsBox.style.display = "none";

//       // Показываем нужную модалку
//       modals.forEach(modal => {
//         modal.style.display = (modal.dataset.id === id) ? "block" : "none";
//       });
//     });
//   });

//   modals.forEach(modal => {
//     modal.addEventListener("mouseleave", () => {
//       // Скрыть модалку
//       modal.style.display = "none";

//       // Показать кнопки
//       buttonsBox.style.display = "grid"; // или flex — как у тебя
//     });
//   });
// });
