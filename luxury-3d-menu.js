document.addEventListener("DOMContentLoaded", function () {

  const burger = document.querySelector(".ra-simple-burger");
  const menu = document.querySelector(".ra-simple-mobile-menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", function () {

    document.body.classList.toggle("ra-simple-menu-open");

    const opened =
      document.body.classList.contains("ra-simple-menu-open");

    burger.setAttribute(
      "aria-expanded",
      opened ? "true" : "false"
    );

    document.body.style.overflow =
      opened ? "hidden" : "";
  });


  const links =
    document.querySelectorAll(".ra-simple-mobile-nav a");

  links.forEach(function (link) {

    link.addEventListener("click", function () {

      document.body.classList.remove(
        "ra-simple-menu-open"
      );

      burger.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.style.overflow = "";

    });

  });

});