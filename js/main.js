// FAQ ACCORDION
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // TOGGLE ICON
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // TOGGLE VISIBILITY OF BODY
    groupBody.classList.toggle("open");

    // CLOSE OTHER OPEN FAQ BODIES
    const otherGroups = faqContainer.querySelectorAll(".faq-group");
  });
});
