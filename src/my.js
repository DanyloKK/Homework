import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/my.scss";
import "../styles/my.css";
$(document).ready(function () {
  const form = $(".js--form");
  const button = $(".btn-success");
  const inputForm = $(".js--form__input");
  const list = $(".js--todos-wrapper");
  const modal = $(".modal");
  const body = $("body");
  const modalTask = $("#todoDetails");
  const buttonClose = $(".btn-close");
  const container = $(".container");
  $(form).on("submit", function (e) {
    e.preventDefault();
    let inputValue = inputForm.val();
    if (inputValue) {
      let createLi = $("<li></li>");
      $(createLi).addClass(
        "list-group-item d-flex align-items-center justify-content-between",
      );
      let createCheckBox = $("<input>");
      $(createCheckBox).attr("type", "checkbox").addClass("form-check-input");
      let createSpan = $("<span></span>").addClass(
        "ms-2 todo-item__description",
      );
      createSpan.text(inputValue);
      $(list).append(createLi);
      $(createLi).append(createCheckBox);
      $(createLi).append(createSpan);
      let deleteButton = $("<button>")
        .addClass("btn btn-danger btn-sm")
        .text("Видалити");
      $(createLi).append(deleteButton);
      inputForm.val("");
      $(deleteButton).on("click", function (e) {
        $(createLi).remove();
      });
      $(createLi).on("click", function (e) {
        $(modal).addClass("modal-show");
        $(body).addClass("background");
        const textSpan = createSpan.text();
        $(modalTask).text(textSpan);
        $(container).addClass("style");
        $(buttonClose).on("click", function () {
          $(modal).removeClass("modal-show");
          $(body).removeClass("background");
          $(container).removeClass("style");
        });
      });
    }
  });
});
