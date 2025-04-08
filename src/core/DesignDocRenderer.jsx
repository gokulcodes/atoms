/** @format */

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function DesignDocRenderer({ readMeUrl }) {
	let [markDown, setMarkDown] = useState('');

	useEffect(() => {
		fetch(readMeUrl).then(async (res) => {
			let content = await res.text();
			setMarkDown(content);
		});
	}, []);

	return (
		<div
			className={`flex flex-col w-11/12 lg:w-8/12 items-start justify-center relative animate-openup`}
		>
			<Markdown remarkPlugins={[remarkGfm]}>{markDown}</Markdown>
		</div>
	);
}

DesignDocRenderer.propTypes = {
	readMeUrl: PropTypes.string,
};

export default DesignDocRenderer;
