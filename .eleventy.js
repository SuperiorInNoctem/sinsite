module.exports = function(eleventyConfig) {
    // Deze regels zorgen dat jullie CSS, foto's en CMS mee worden verhuisd naar internet!
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("_data");

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    };
};
