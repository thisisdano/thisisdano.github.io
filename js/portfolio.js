import Splide from "/js/splide/splide.esm.js";

console.log("Oh hi!");

const options = {
  type: "fade",
  rewind: true,
  arrows: false,
};

const advance = (instance, current) => {
  if (current.index < instance.length - 1) {
    instance.go(current.index + 1);
  } else {
    instance.go(0);
  }
};

const lil = new Splide("#library-innovation-lab .splide", options);
lil.mount();
lil.on("click", (slide) => advance(lil, slide));
