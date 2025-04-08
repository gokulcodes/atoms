import PropTypes from 'prop-types';
import ResultItem from "./ResultItem"

function Results({ results }) {

    if (results && results.length === 0) {
        return null
    }

    return (
        <div className="absolute top-24 w-full rounded-2xl max-h-96 overflow-y-scroll overscroll-none">
            {results.map((result, index) => (
                <ResultItem key={result.id} index={index} result={result} />
            ))}
        </div>
    )
    
}

Results.propTypes = {
    results: PropTypes.array
}

export default Results