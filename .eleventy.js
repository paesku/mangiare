const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const pluginSass = require('@grimlink/eleventy-plugin-sass');
const sass = require('sass');
const filterPostCss = require('./transform/post-css');

module.exports = (config) => {

    config.addPlugin(EleventyHtmlBasePlugin);
    config.addPlugin(pluginSass, {sass});
    config.addFilter('postCSS', filterPostCss);

    config.addPassthroughCopy({
        'src/assets/images/*.(jpg|jpeg|png|webp)': 'img'
    });

    return {
        dir: {
            input: './src',
            output: './build'
        }
    }
}