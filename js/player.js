const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".link");
const turbulence = document.querySelector("feTurbulence");
const circle = document.querySelector(".cursor-circle");
const durationTime = 0.4;

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

document.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".link")) return;
  gsap.to(turbulence, {
    duration: durationTime,
    startAt: { attr: { baseFrequency: 0.05 } },
    attr: { baseFrequency: 0 }
  });

  gsap.to(circle, {
    duration: durationTime,
    startAt: { attr: { r: 67 } },
    attr: { r: 50 }
  });
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.matches(".link")) return;
  gsap.to(circle, {
    duration: durationTime,
    startAt: { attr: { r: 50 } },
    attr: { r: 67 }
  });
});