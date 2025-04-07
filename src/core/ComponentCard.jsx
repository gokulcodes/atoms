import renderComponent from '@/utils';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";

export default function ComponentCard({ details }) {
    const { name, lastCommit, id, readMeUrl } = details;
    const navigate = useNavigate()

    // (async () => {
    //     try {
    //         const module = await import(path);
    //         // Assuming the imported module has a default export or a named export
    //         // that you want to use.
    //         if (module.default) {
    //             console.log(module.default)
    //             setComponent(module.default)
    //         } else {
    //             console.log(module)
    //             setComponent(module)
    //         }
    //     } catch (error) {
    //         console.error("Error importing module:", error);
    //     }
    // })();

    function handleComponentSelection() {
        // dispatch({ type: "select_component", payload: name })
        // setTimeout(() => {
            navigate(`/component/${id}`, {
                state: {id: id,
                name: name,
                readMeUrl: readMeUrl}
            })
        // }, 1000)
    }

    return (
        <div onClick={handleComponentSelection}>  
            <div className="dark:bg-cardBg-dark cursor-pointer group transform overflow-hidden hover:-translate-y-2 grow bg-cardBg rounded-4xl p-4">
                <div className='dark:bg-demoBg-dark bg-demoBg flex items-center justify-center h-[30vh] pointer-events-none rounded-4xl p-10'>
                    {renderComponent(id)}
                    {/* <img className="group-hover:scale-110 transform " src={previewImage} alt={name} /> */}
                </div>
                <div className="w-full flex justify-between pt-4">
                    <h2 className="dark:text-white text-xl font-medium mb-2">{name}</h2>
                    <p className="dark:text-white/60 text-gray-700 mb-4">{lastCommit}</p>
                </div>
            </div>
        </div>
    )    
}

ComponentCard.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastCommit: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        readMeUrl: PropTypes.string.isRequired
    }),
}