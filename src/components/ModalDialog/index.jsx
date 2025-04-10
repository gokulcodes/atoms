import { Fragment, useCallback, useState } from 'react';
import Modal from './View/Modal';

function ModalView() {
	const [show, setShow] = useState(false);

	const handleModalToggle = useCallback(() => {
		setShow(!show);
	}, [show]);

	return (
		<Fragment>
			<button
				className="border flex flex-row items-center justify-between dark:border-white/10 border-gray-300 dark:bg-cardBg-dark dark:text-white bg-white p-4 rounded-xl cursor-pointer hover:dark:bg-bodyBg-dark hover:bg-gray-200"
				onClick={handleModalToggle}
			>
				Open Modal
			</button>
			<Modal
				handleClose={handleModalToggle}
				isOpen={show}
			>
				<Modal.Header>Atoms Modal</Modal.Header>
				<Modal.Body>
					<img src="https://dummyimage.com/600x400/000/fff" />
				</Modal.Body>
				<Modal.Footer>
					<div className="flex items-center gap-4 justify-end w-full">
						<button
							onClick={handleModalToggle}
							className="border flex flex-row items-center justify-between dark:border-white/10 border-gray-300 dark:bg-cardBg-dark dark:text-white bg-white px-4 py-3 rounded-xl cursor-pointer hover:dark:bg-bodyBg-dark hover:bg-gray-200"
						>
							Close
						</button>
						<button
							onClick={handleModalToggle}
							className="border flex flex-row items-center justify-between dark:border-white/10 border-gray-300 dark:bg-cardBg-dark dark:text-white bg-white px-4 py-3 rounded-xl cursor-pointer hover:dark:bg-bodyBg-dark hover:bg-gray-200"
						>
							Submit
						</button>
					</div>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}
export default ModalView;
