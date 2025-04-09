<!-- @format -->

# Dropdown

Here is the LLD for Dropdown component. Implementation includes working with React Portal, List rendering, Accessibility for keyboard events etc. Let's dive deep into design

## Requirements

1. What devices should be supported?
    - Mobile, Desktop, Tablets
2. Is there any max height for the list to be rendered on the dropdown?
    - No max height is required. Just list all items. However maximum of 20 items is recommended
3. What happens when a dropdown exceeds the viewport?
    - Implement scroll view for overflowed list items
4. Can there be multiple dropdown open at once?
    - No, there can't be
5. What are content type of dropdown list?
    - Text contents

## Architecture

We'll use composition model to develop the entire dropdown component. Data binding for the parent and child component is handled internally by context API By using this approach, we can simplify props drilling for sending states between child components.

- Dropdown - Root component, coordinates events between inner components
- Dropdown.Button - Button that toggles the display state of Dropdown.List
- Dropdown.List - Wrapper for dropdown list options
- Dropdown.Item - Individual list items

## Data Modal

- isOpen - Handle display state for list component
- activeItem - Store the index of current active list item

## Interface Definition

- DropdownMenu
    - isInitiallyOpen - true / false
- DropdownMenu.Button
    - title - String
    - onClick - Function to toggle display state of list component
- DropdownMenu.List
    - maxHeight - number
    - position - left / right / top / bottom
- DropdownMenu.Item
    - onClick - Function to trigger on item click
    - disabled - true / false

## Optimization

- Render

    - Relative to parent
    - Relative to viewport [Use React Portals]
    - Position left / right / top / bottom
    - Automatic flipping when near the edge

- Accessibility:

- ARIA tags

    - aria-expanded=true/false for DropdownMenu.List
    - aria-haspopup - DropdownMenu.Button
    - aria-disabled - DropdownMenu.Item which is disabled
    - aria-labelledby - DropdownMenu
    - aria-label - DropdownMenu

- Mouse interaction - When a new click action is received outside the dropdown, close the dropdown popup
- Focus Management - We need to restrict focus to only the list. It's kind of complicated to implement. Restrict tabs when the list is opened. Move focus between list items on up/down arrow

- Keyboard Interactions:

    - Esc - closes the popup
    - Enter - click the focused element eg. Button, Item
    - Down / Up - Move between list items

- Handle RTL / LTR directions
