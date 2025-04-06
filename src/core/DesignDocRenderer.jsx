import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'

function DesignDocRenderer() {
    let [markDown, setMarkDown] = useState('')

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gokulcodes/atoms/refs/heads/main/src/components/Autocomplete/README.md')
            .then(async (res) => {
                let content = await res.text()
                console.log(content, res)
                setMarkDown(content)
        })
    }, [])

    return (
        <div className={`flex flex-col w-11/12 lg:w-8/12 items-start justify-center relative`} >
            <Markdown remarkPlugins={[remarkGfm]} >{markDown}</Markdown>
        </div>
    )

}

export default DesignDocRenderer