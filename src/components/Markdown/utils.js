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

function wordParser(content) {
	let response = '';
	let n = content.length;

	function isTokenStart(i, token) {
		let tokenLength = token.length;
		if (
			i + tokenLength < n &&
			content.substr(i, tokenLength) === token &&
			content[i + tokenLength] !== ' '
		) {
			return true;
		}
		return false;
	}

	function isTokenEnd(i, token) {
		let tokenLength = token.length;
		if (
			i + tokenLength < n &&
			content.substr(i, tokenLength) === token &&
			content[i + tokenLength] === ' '
		) {
			return true;
		}
		if (content.substr(i, tokenLength) === token) {
			return true;
		}
		return false;
	}

	for (let i = 0; i < n; i++) {
		if (isTokenStart(i, '**')) {
			// bold
			let j = i + 1,
				token = '**';
			let tokenLength = token.length;
			while (j < n && !isTokenEnd(j, token)) {
				j++;
			}
			response += `<b>${wordParser(
				content.substr(i + tokenLength, j - i - tokenLength)
			)}</b>`;
			i = j + tokenLength;
		} else if (isTokenStart(i, '*')) {
			// italic
			let j = i + 1,
				token = '*';
			let tokenLength = token.length;
			while (j < n && !isTokenEnd(j, token)) {
				j++;
			}
			response += `<em>${wordParser(
				content.substr(i + tokenLength, j - i - tokenLength)
			)}</em>`;
			i = j;
		} else if (isTokenStart(i, '_')) {
			// underline
			let j = i + 1;
			while (j < n && !isTokenEnd(j, '_')) {
				j++;
			}
			response += `<u>${wordParser(
				content.substr(i + 1, j - i - 1)
			)}</u>`;
			i = j;
		} else if (isTokenStart(i, '~~')) {
			// strikethrough
			let j = i + 1;
			while (j < n && !isTokenEnd(j, '~~')) {
				j++;
			}
			response += `<strike>${wordParser(
				content.substr(i + 2, j - i - 2)
			)}</strike>`;
			i = j + 2;
		} else if (isTokenStart(i, '==')) {
			// highlight
			let j = i + 1;
			while (j < n && !isTokenEnd(j, '==')) {
				j++;
			}
			response += `<mark>${wordParser(
				content.substr(i + 2, j - i - 2)
			)}</mark>`;
			i = j + 1;
		} else if (isTokenStart(i, '[')) {
			// url
			let j = i + 1;

			while (j < n && content[j] !== ']') {
				j++;
			}
			let text = content.substr(i + 1, j - i - 1),
				url = '';
			let k = j + 1;
			if (content[k] === '(') {
				while (k < n && content[k] !== ')') {
					k++;
				}
				url = content.substr(j + 2, k - j - 2);
			}
			if (url && text) {
				response += `<a href=${url}>${text}</a>`;
				i = k + 1;
				continue;
			}
			response += `[`;
		} else if (content[i] === '`') {
			let j = i + 1,
				token = '`';
			let tokenLength = token.length;
			while (j < n && !isTokenEnd(j, token)) {
				j++;
			}
			response += `<code>${wordParser(
				content.substr(i + tokenLength, j - i - tokenLength)
			)}</code>`;
			i = j;
		} else {
			response += content[i];
		}
	}

	return response;
}

function Digester(content, tabs = '') {
	let lines = content.split('\n');
	let response = [],
		n = lines.length;
	for (let i = 0; i < n; i++) {
		let line = lines[i];
		let tokens = line.split(' ');

		if (line[0] === ' ') {
			let j = 0,
				tab = '\t';
			while (j < line.length && line[j] === ' ') j++;
			tab = tab.repeat(j);
			response.push(`<pre>${Digester(line.substr(j), tab)}</pre>`);
		} else if (tokens[0] === '#') {
			response.push(`<h1>${wordParser(line.substr(1))}</h1>`);
		} else if (tokens[0] === '##') {
			response.push(`<h2>${wordParser(line.substr(2))}</h2>`);
		} else if (tokens[0] === '###') {
			response.push(`<h3>${wordParser(line.substr(3))}</h3>`);
		} else if (tokens[0] === '####') {
			response.push(`<h4>${wordParser(line.substr(4))}</h4>`);
		} else if (tokens[0] === '#####') {
			response.push(`<h5>${wordParser(line.substr(5))}</h5>`);
		} else if (tokens[0] === '######') {
			response.push(`<h6>${wordParser(line.substr(6))}</h6>`);
		} else if (tokens[0] === '>') {
			response.push(
				`<blockquote>${wordParser(line.substr(1))}</blockquote>`
			);
		} else if (tokens[0] === '>>') {
			response.push(
				`<blockquote>${wordParser(line.substr(2))}</blockquote>`
			);
		} else if (tokens[0] === '>>>') {
			response.push(
				`<blockquote>${wordParser(line.substr(3))}</blockquote>`
			);
		} else if (tokens[0] === '```') {
			let temp = [],
				j = i + 1;
			for (j = i + 1; j < n; j++) {
				if (lines[j] === '```') {
					break;
				}
				temp.push(lines[j]);
			}
			response.push(`<code>${temp.join('\n')}</code>`);
			i = j;
		} else if (line.substr(0, 2) === '![') {
			let i = 1,
				j = 2,
				m = line.length;

			while (j < m && line[j] !== ']') {
				j++;
			}
			let text = line.substr(i + 1, j - i - 1),
				url = '';
			let k = j + 1;
			if (line[k] === '(') {
				while (k < m && line[k] !== ')') {
					k++;
				}
				url = line.substr(j + 2, k - j - 2);
			}
			console.log(text, url);
			if (url && text) {
				response.push(
					`<img loading="lazy" alt="${text}" src=${url} />`
				);
				i = k + 1;
			}
		} else if (tokens[0] === '*' || tokens[0] === '-') {
			let temp = [],
				j = i;
			for (j = i; j < n; j++) {
				if (
					lines[j].substr(0, 2) !== '* ' &&
					lines[j].substr(0, 2) !== '- '
				) {
					break;
				}
				temp.push(`<li>${tabs + wordParser(lines[j].substr(2))}</li>`);
			}
			if (temp.length) {
				response.push(
					`<ul class="list-disc list-inside">${temp.join('\n')}</ul>`
				);
				continue;
			}
			i = j;
		} else if (line[0] === '\t') {
			let j = 0;
			while (j < line.length && line[j] === '\t') j++;
			response.push(`<pre>${line.substr(j)}</pre>`);
		} else if (line.length) {
			response.push(`<p>${wordParser(line.substr(0))}</p>`);
		}
	}
	return response.join('');
}

export { wordParser, Digester };
