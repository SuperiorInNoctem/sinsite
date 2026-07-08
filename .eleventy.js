module.exports = function(eleventyConfig) {
    // Kopieer alleen de assets en admin mappen naar de live website
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    };
};
