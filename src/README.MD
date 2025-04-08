# UI Listing

# Requirements

- Home page with all the components should be listed.
  - Header with Atoms branding, Github navigation & Theme Mode toggler
  - Listing card -> Preview Image, Component Name & Last commit date
  - On Hovering the card show a simple preview of the component in GIF format
  - Everything should be blazing fast with smooth animations. Implement View Transition API for page transition
- Component view page where the components real demo is displayed. A details description of LLD from Github Readme
  - Header should look like a breadcrumb with Component Name
  - Component demo view, with full screen button to make the component view fit to full screen
  - Show your LLD writeup for the component next to demo view
- Every should be compatible with Mobile, Desktops, tablets

# Architecture

Let's use container/presentation pattern to develop components viewing experience

Presentation Components:

- Header
  - Atoms branding
  - Github linking
  - Theme toggler
- ComponentCard
  - Preview Image
  - Component title
  - Last activity
  - Hover: show a preview of component interation in GIF image
- ComponentsWrapper

  - Takes all ComponentCard as children
  - Use CSS Grid system to handle responsive behaviour.

- DemoView
  - Actual component is rendered for demo
  - Configuration for the component should be editable in this view [Experimental]
  - Full screen view button
- DesignDocRenderer
  - Pull your LLD writeup from Github and parse it into this component
  - It should be capable for rendering Markdown in Github standard

![Home](https://github.com/gokulcodes/atoms/blob/main/public/home.png "Home Architecture")

![View](https://github.com/gokulcodes/atoms/blob/main/public/view.png "View Architecture")

# Data Modal

We have control the behaviour of the entire app in each screens. Everything is controlled by central data storage with context API

```
initialState: {
    theme: 'light'
    components: [
        {
            name: 'Autocomplete'
            lastUpdatedDate: '12233'
            previewImage: ""
            previewGif: ""
        }
        .....
    ],
    currentComponent: {
        componentId: 'sdf'
    }
    fitDemoToScreen: false
}
```

# Interface Definition

Mostly components will have it's own internal context link to get information they want

```
* ComponentCard
    * componentDetails={}
```

# Optimization

- Performance:

  - Keep in mind to reduce number of DOM nodes as much as possible.

- User experience:

  - If the list grows, we have to support pagination for ComponentsWrapper
  - Keyboard interaction for navigating through list of focusable items

- Accessibility:

  - role=listbox for ComponentsWrapper
  - aria-expanded for fit to screen functionality in DemoView

- Security:
  - Santize data which we get from external sources like LLD content from Github, commit information etc
