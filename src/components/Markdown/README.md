# Markdown Parser

# Requirements

1. Support for titles [h1,h2,h3...h6]
    - yes
2. Support for paragraphs [p, span]
    - yes
3. Support for List [Both ordered/unordered]
    - yes
4. Support for code blocks [Single & multiline]
    - yes
5. Support for Blockquotes [Single & multine]
    - yes
6. Suppport for tables
    - yes
7. Support for Image/Video
    - yes
8. Support for Horizontal lines
    - yes
9. Word formating
    - bold, italic, underline, strikethrough, highlight, url encoding

# Architecture

Since, we have few independent text parser types, let's define a separation function for each types.

1. TitleParser
    - Wrap the content passed a argument to a head tag based on the level passed.
    - Returns the result as string
2. DescriptionParser
    - Wrap the content passed a argument to paragraph tag
    - Returns the result as string
3. ListParser
    - Takes a bunch of lines of string
        - If it's a ordered list, look for a next line which is not starting with a number. Wrap each lines in between this with `li`
        - Wrap the overall text lines with `ol`
        - If it's a unordered list, look for a next line which is not starting with a \* [star]. Wrap each line in between this with `li`
        - Wrap the overall text lines with `ul`
    - Take tab spaces and give necessary indentation
4. CodeParser
    - If the prefix starts with ``` three tilde symbol, look for the next line which is also having tilde symbol
    - Enclose the lines / text inbetween with `code` block
5. BlockQuotesParser
    - If the prefix start with > symbol, look for the next line which is not having > symbol as prefix
    - Enclose the lines inbetween with custom css
6. TableParser
    - If a line full contains only ---- symbol, it may be starting of the table
        - Make sure next line starts with | symbol, if it's not, it's a horizontal line tag
    - Looks for next next which is also having ---- symbol in full. It means the end of the table
        - Wrap the lines inside this block with table columns.
        - Columns can be separated by | symbol
7. MultiMediaParser
    - If the word starts ![]() symbol, render the url inside () block with image/video tag.
    - Word inside [] block says alt attribute
8. HorizontalLineParser
    - If a line fully contain --- symbol, it means we need to create hr tag
    - Make sure it's not a table starting
9. WordParser
    - Each word should be parsed into this function to get different word formating
10. Digester
    - Entire text will be parsed into this function, all differentiation will be done inside this function.

# Data Modal

- htmlDictionary - Each formating html block will be pushed into this
    - It's result will be pushed to DOMParser.parseFromString()

# Interface Definition

- TitleParse
    - arguments - content, level
- DescriptionParser
    - arguments - content
- CodeParser
    - arguments - codeBlock
- BlockQuotesParser
    - arguments - content
- TableParser
    - arguments - tableheadings, each colum values for headings
- MultiParser
    - arguments - url, alt, title
- HorizontalLineParser
    - It'll just return hr tag
- WordParser
    - arguments - content, style type like bold, underline...
- Digester
    - arguments - full markdown content

# Optimization

- Security
    - Make sure to sanitize the text before any parsing
