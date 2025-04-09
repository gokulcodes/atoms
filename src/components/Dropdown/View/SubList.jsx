import { cloneElement, Fragment, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function SubListRenderer({ show, ref, children }) {
	const subListRef = useRef();

	if (!show) {
		return null;
	}

	const geometry = ref.current.getBoundingClientRect();
	return createPortal(
		<div
			className="absolute w-full shadow rounded-2xl overflow-hidden"
			ref={subListRef}
			style={{
				width: `${geometry.width}px`,
				left: `${geometry.right + 10}px`,
				top: `${geometry.top}px`,
			}}
		>
			{children.map((child, index) => (
				<Fragment key={index}>
					{cloneElement(child, { subListRef })}
				</Fragment>
			))}
		</div>,
		document.body
	);
}

SubListRenderer.propTypes = {
	show: PropTypes.bool,
	ref: PropTypes.object,
	children: PropTypes.element,
};

function SubList({ title, children, ref }) {
	const [show, setShow] = useState(false);

	function handleListVisibility() {
		setShow(!show);
	}

	return (
		<Fragment>
			<div
				id="sublist"
				onMouseEnter={handleListVisibility}
				onMouseLeave={handleListVisibility}
				className="w-full dark:hover:bg-bodyBg-dark hover:bg-gray-100 cursor-pointer dark:bg-cardBg-dark dark:text-white bg-white px-6 py-4 border-b dark:border-white/10 border-gray-200 flex items-center justify-between"
			>
				<p>{title}</p>
				<img
					className="w-3 h-3 dark:invert"
					src="/icons/rightarrow.png"
					alt="dropdown-icon"
				/>
			</div>
			<SubListRenderer
				show={show}
				ref={ref}
			>
				{children}
			</SubListRenderer>
		</Fragment>
	);
}

SubList.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element,
	ref: PropTypes.object,
};

export default SubList;
