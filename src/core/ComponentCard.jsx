import PropTypes from 'prop-types';
import { Link } from "react-router";

export default function ComponentCard({ details }) {

    const { name, lastCommit, previewImage } = details;

    return (
        <Link to="/component/autocomplete" viewTransition >  
            <div className="dark:bg-cardBg-dark cursor-pointer hover:shadow-md transform hover:-translate-y-2 grow bg-cardBg rounded-2xl p-4">
                <img className="w-full h-64 object-cover overflow-hidden rounded-2xl" src={previewImage} alt={name} />
                <div className="w-full flex justify-between pt-4">
                    <h2 className="dark:text-white text-xl font-medium mb-2">{name}</h2>
                    <p className="dark:text-white/60 text-gray-700 mb-4">{lastCommit}</p>
                </div>
            </div>
        </Link>
    )    
}

ComponentCard.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastCommit: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired
    })
}