/**
 * Markdown Parser inspired from Github
 *
 * A line starts with single hashtag [#], create a new Heading with <h1 /> tag. Add a <a /> for supporting permalink link
 *
 * A line starts with doubel hashtag [##], create a new heading with <h2 /> tag.  Add a <a /> for supporting permalink link
 *
 * Line with no prefix, create a <p /> tag
 *
 * Lines with star [*], group every line next to it, wrap those lines with <li /> tag and push everything into <ul /> tag
 *
 * Lines with star [1....N]., group every line next to it, wrap those lines with <li /> tag and push everything into <ol /> tag
 *
 * Line starts with [```] 3 tilde symbol signifies code block, check with next closing 3 tilde symbole and wrap everything inside the content with <code /> tag
 *
 * Text wrapped with [**] double star on both sides should be wrapped with <strong />
 *
 * Text wrapped with [*] star on both sides should be wrapped with <em />
 *
 * Line starts with [>] symbol, create a block with Blockquotes.
 *
 * Line starts with ![alt](URL) symbol, create a image tag with URL attribute and add alt tag to it
 *
 * <! > Create a comment node for commented markdown
 * @format
 */
