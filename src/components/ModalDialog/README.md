# Modal Dialog

# Requirements

1. What are the devices need to be supported?
    - Mobile, Desktop, Tablets
2. Will there be multiple dialog open on top of each other?
    - Yes, there can be
3. What are the content Modal renderer should support?
    - It's should support all formats
4. What are the components of modal?
    - Header, Footer, ModalBody, Close button, Backdrop click close [customizable]

# Architecture

Let's use composition modal to group all components with shared context

- Modal - Root container hold the data flow information
- Modal.Header - Sits on top of the Modal. It contains close button
- Modal.Footer - Sits on bottom of the Modal. The content inside footer is extensively customizable
- Modal.Body - Can render any type of component. Also, we need to give maxHeight to prevent horizontal growth of the modal
- Modal.Backdrop - Sits below the entire component. It prevent clicks below the modal.

# Data Modal:

Since, it's just a view component, States are handled externally.

# Interface Definition:

- Modal
    - isOpen - true / false
    - enableToggleOnBackdropClick - true / false
    - children - React.Element
- Modal.Header
    - title - string;
    - onClose - Function
- Modal.Footer
    - children
- Modal.Body
    - children - React.Element
- Modal.Backdrop
    - onBackdropClick - function

# Optimization

- Rendering:

    - Since, we have to render the modal on top of the entire body, it's good to use React Portal. This helps to render outside the DOM Hierarchy
    - Scroll lock on body. We want to restrict scrolling on body when modal is open

- User Experience:

    - Focus Management: Customize tab functionality when popup is opened. Focus should not move outside of Modal when it's opened
    - Mouse Interaction: Clicking on backdrop will basically close the modal. However, this can be customized with props

- Accessibility:

    - aria-expanded
    - aria-modal
    - aria-label
    - aria-describedby: dialog

- Internationalization
    - Handle RTL and LTR directions too
