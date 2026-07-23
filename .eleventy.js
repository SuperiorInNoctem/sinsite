module.exports = function(eleventyConfig) {
// Kopieer CSS, afbeeldingen en de CMS admin map rechtstreeks naar de website
eleventyConfig.addPassthroughCopy("assets");
eleventyConfig.addPassthroughCopy("admin");
eleventyConfig.addPassthroughCopy("data");
return {
dir: {
input: ".",
output: "_site",
includes: "_includes",
data: "_data"
}
};
};
