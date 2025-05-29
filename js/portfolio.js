import Splide from "/js/splide/splide.esm.js";

console.log("Oh hi!");

const options = {
  rewind: true,
};

const advance = (instance, current) => {
  if (current.index < instance.length - 1) {
    instance.go(current.index + 1);
  } else {
    instance.go(0);
  }
};

const uswds = new Splide("#uswds .splide", options);
uswds.mount();
uswds.on("click", (slide) => advance(uswds, slide));

const ps = new Splide("#public-sans .splide", options);
ps.mount();
ps.on("click", (slide) => advance(ps, slide));

const berk = new Splide("#berkman-center .splide", options);
berk.mount();
berk.on("click", (slide) => advance(berk, slide));

const lil = new Splide("#library-innovation-lab .splide", options);
lil.mount();
lil.on("click", (slide) => advance(lil, slide));

const perma = new Splide("#perma-cc .splide", options);
perma.mount();
perma.on("click", (slide) => advance(perma, slide));

const npoWeb = new Splide("#n-plus-one-website .splide", options);
npoWeb.mount();
npoWeb.on("click", (slide) => advance(npoWeb, slide));

const npoMag = new Splide("#n-plus-one-magazine .splide", options);
npoMag.mount();
npoMag.on("click", (slide) => advance(npoMag, slide));
