import PropTypes from 'prop-types';

function ResultItem({ result, index }) {

    let shouldAutoFocus = index == 0
    return (
        <button autoFocus={shouldAutoFocus} className="w-full dark:hover:bg-bodyBg-dark hover:bg-gray-100 cursor-pointer dark:bg-cardBg-dark dark:text-white bg-white p-4 border-b dark:border-white/10 border-gray-200 flex justify-between" >
            <div className="flex flex-row gap-2">
                <img loading="lazy" className="w-6 border border-bodyBg rounded-full" src={result.image} alt={result.firstName} />
                <p>{result.firstName + " " + result.lastName} </p>
            </div>
            <p>{result.age }</p>
        </button>
    )
}

ResultItem.propTypes = {
    result: PropTypes.shape({
        image: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number,
    }),
    index: PropTypes.number
}

export default ResultItem