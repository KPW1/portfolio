const body = document.querySelector("body");
// $(window).on("scroll", () => {
//   const footer = $(".profile").offset().top - 500;
//   console.log(footer);
//   console.log(scrollY);
//   if (scrollY > 100) {
//     $("body").addClass("active");
//   } else {
//     $("body").removeClass("active");
//   }
// });
const profile = document.querySelector(".skills");
addEventListener("scroll", () => {
  const center = profile.offsetTop;
  console.log(center);
  if (scrollY > center) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
});
