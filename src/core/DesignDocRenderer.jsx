/** @format */

import Markdown from '@/components/Markdown';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function DesignDocRenderer({ readMeUrl }) {
	let [markDown, setMarkDown] = useState('');

	useEffect(() => {
		// setMarkDown(
		// 	`- What are the compatible devices ?
		// 		Mobile, Desktop, Tablets etc`
		// );
		fetch(readMeUrl).then(async (res) => {
			let content = await res.text();
			setMarkDown(content);
		});
	}, []);

	return (
		<div
			className={`flex flex-col w-11/12 lg:w-8/12 items-start justify-center relative animate-openup`}
		>
			{markDown && <Markdown>{markDown}</Markdown>}
		</div>
	);
}

DesignDocRenderer.propTypes = {
	readMeUrl: PropTypes.string,
};

export default DesignDocRenderer;
