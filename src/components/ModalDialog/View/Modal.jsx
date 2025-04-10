import PropTypes from 'prop-types';
import { cloneElement, Fragment, useCallback, useEffect } from 'react';
import Header from './Header';
import { createPortal } from 'react-dom';
import Footer from './Footer';
import Body from './Body';
function Modal({ children, handleClose, isOpen }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	const handleBackdropClose = useCallback((e) => {
		if (e.target.id === 'modal-backdrop') {
			handleClose();
		}
	}, []);

	return (
		isOpen &&
		createPortal(
			<dialog
				open={isOpen}
				aria-modal="true"
				aria-describedby="dialog"
				onClick={handleBackdropClose}
				id="modal-backdrop"
				className={
					isOpen
						? 'w-full h-full bg-black/10 top-0 z-50 flex items-center justify-center animate-openup'
						: ''
				}
			>
				<div
					id="modal-body"
					className="md:w-1/2 w-11/12 bg-white rounded-4xl overflow-hidden "
				>
					{children.map((child, index) => (
						<Fragment key={index}>
							{cloneElement(child, { handleClose })}
						</Fragment>
					))}
				</div>
			</dialog>,
			document.body
		)
	);
}

Modal.Header = Header;
Modal.Footer = Footer;
Modal.Body = Body;

Modal.propTypes = {
	children: PropTypes.element,
	handleClose: PropTypes.func,
	isOpen: PropTypes.bool,
};

export default Modal;
