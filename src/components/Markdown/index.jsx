import { useEffect, useRef } from 'react';
import { Digester } from './utils';
import './markdown.modules.css';
import PropTypes from 'prop-types';

function Markdown({ children }) {
	const ref = useRef();

	useEffect(() => {
		if (children) {
			const htmlText = Digester(children);
			ref.current.innerHTML = `<p>${htmlText}</p>`;
		}
	}, []);

	if (!children || !children.length) {
		return null;
	}

	return <div ref={ref}></div>;
}

Markdown.propTypes = {
	children: PropTypes.element,
};

export default Markdown;
