window.addEventListener("load", () => {
  const marqueeInner = document.querySelector(".marquee__inner");
  const span = marqueeInner.querySelector("span");

  const spanWidth = span.offsetWidth;
  const screenWidth = window.innerWidth;
  const minWidth = screenWidth * 2;

  let totalWidth = spanWidth;
  const content = marqueeInner.innerHTML;

  while (totalWidth < minWidth) {
    marqueeInner.insertAdjacentHTML("beforeend", content);
    totalWidth += spanWidth + 48; // +gap
  }

  const speed = 200; // pixels per second
  const duration = totalWidth / speed;

  marqueeInner.style.animationDuration = `${duration}s`;
});
