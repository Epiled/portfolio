let animatable = "";

window.addEventListener("scroll", initAnimation);

function initAnimation() {
  const trigger = window.innerHeight * 0.8;

  animatable.forEach((item, i, list) => {
    const itemPosition = item.getBoundingClientRect().top;
    let animationControl = itemPosition <= trigger;

    if (animationControl && i != 0) {
      list[i - 1].onanimationstart = () => {
        updateState(item);
        item.dataset.complete = "true";
      };

      if (list[i - 1].dataset.complete) {
        updateState(item);
      }

      list[i].onanimationend = () => {
        item.dataset.complete = "true";
      };

      list[i - 1].onanimationend = () => {
        item.dataset.complete = "true";
      };
    } else if (animationControl) {
      updateState(item);
    }
  });
}

function updateList() {
  animatable = document.querySelectorAll("[data-animation]");
}

function updateState(item) {
  item.classList.add("active");
  item.style.animationDelay = `${1 / 10}s`;
}

updateList();
initAnimation();

export const animation = {
  updateList,
  initAnimation,
};
