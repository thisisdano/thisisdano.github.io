import path from "node:path";
import * as sass from "sass";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("styles/css");
}
