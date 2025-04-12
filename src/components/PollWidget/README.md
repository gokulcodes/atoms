# Poll Widget

A simple voting component where users can vote multiple options

# Requirements:

1. What are the supported devices?
    - Mobile, Desktop, Tablets
2. Will this component be embedded as iframe in another website?
    - yes
3. What is the total no of options possible?
    - Maximum of three options can be given for a single question
4. Can user select multiple options?
    - yes, multiple options is possible
5. What is the full bar represent for each option?
    - Full bar represent the total number of votes for all options by all users
    - Progress indicator represent the ratio between total votes for the current option & total number of votes for all options
6. Will there be a submit button?
    - yes, there will be submit option
7. Can user edit his response after submit?
    - yes, they can
8. Do user need to login to submit voting?
    - No need to handle this

# Architecture

- PollWidget
    - Holds the overall data for options & makes network call on vote submission
    - PollSubmit
        - Validate any voting is done or not?
        - OnSubmit, push the voting information to server
- PollOptions
    - Individual option component
    - On upVote or downVote updates the local state

# Data Modal

Essential data to render PollWidget

```
{
    title: string,
    totalVotes: number,
    submitUrl: <URL>,
    options: [
        {
            id: 123,
            optionTitle: string,
            votes: number,
            voted: bool
        },
        ....
    ],
    selectedOptions: [id...]
}
```

# Interface Definition

- PollWidget - It's a context provider
    - submitUrl
    - width & height
- PollOptions
    - option metadata like title, votes, percentage if user selected this option

# Optimization

- Persisting across sessions
    - We can use uuid to see if user already responded to this message or not by sending the id as part of cookie
- User experience
    - Once user upvote or downvote, progress should be updated with proper animation
- Accessibility
    - aria-label - title for the poll widget
    - aria-live - whenever a change happen in poll widget
    - Keyboard interaction - user tabIndex=0 for handling keyboard navigation
- Internationalization:
    - Language support should be sent via query params to get this reflected to our iframe
