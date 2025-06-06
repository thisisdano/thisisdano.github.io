import path from "node:path";
import * as sass from "sass";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("styles/css");
  eleventyConfig.addPassthroughCopy("projects/berkman/img");
  eleventyConfig.addPassthroughCopy("browserconfig.xml");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@splidejs/splide/dist/js": "js/splide",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@splidejs/splide/dist/css": "styles/splide",
  });
}
