import Splide from "/js/splide/splide.esm.js";

console.log("Oh hi!");

const options = {
  pagination: false,
  rewind: true,
  type: "fade",
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

const perma = new Splide("#perma-cc .splide", options);
perma.mount();
perma.on("click", (slide) => advance(perma, slide));

const ftl = new Splide("#free-the-law .splide", options);
ftl.mount();
ftl.on("click", (slide) => advance(ftl, slide));

const berk = new Splide("#berkman-center .splide", options);
berk.mount();
berk.on("click", (slide) => advance(berk, slide));

const npoWeb = new Splide("#n-plus-one-website .splide", options);
npoWeb.mount();
npoWeb.on("click", (slide) => advance(npoWeb, slide));

const npoMag = new Splide("#n-plus-one-magazine .splide", options);
npoMag.mount();
npoMag.on("click", (slide) => advance(npoMag, slide));
