# Carousel
A sliding a component which shows the children one by one like a slideshow

# Requirement
1. What are the supported devices?
    * Mobile, Desktop, Tablet
2. How many elements will the carousel can render?
    * Maximum of 20 is fine to handle
3. Can user be able to move to different element without using left or right navigation?
    * Handle pagination with paginated dots
4. Will there be circular navigation?
    * yes, there can be 

# Architecture
Here, we'll use ViewModal + Modal pattern.

* Carousel - Root component which holds the state of the carousel
    * PreviousButtom - Move's the slide by 1 to left
    * NextButtom - Move's the slide by 1 to left
    * ProgressDots - Shows the total no of slides in dot format and takes click action to navigate to that      particular slide
* Carousel.Slide - Individual slide which accepts any react component as children

# Data Modal:
* Carousel is a context provider which holds all the data
    * currentActiveSlide
    * autoPlay
    * delay

# Interface Definition
* Carousel
    - autoPlay - true/false
    - delay - number [transition duration between slides]
    - children - all slides components

* Carousel.Slide
    - children - takes any react element node

# Optimization
* Rendering:
    * Align preview and next button to center in vertical spacing
    * Can also implement css scroll snaping feature to handle snapping between slide transitions
* Performance:
    * Consider implementing virtualized list for large datasets
    * Device specific rendering for image components
    * Implement lazy loaded component for images
* Internationalization
    * Handle LTR & RTL for carousel
* Accessibility:
    * alt tag for screen readers
    * aria-label for next and prev button
* Keyboard support
    * Focus carousel and button left and right arrow for slide transitions
    * add tabIndex=0 to focus fresh