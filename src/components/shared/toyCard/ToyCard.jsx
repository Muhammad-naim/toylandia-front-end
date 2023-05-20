import { Rating, ThinStar } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ToyCard = ({ categorizedData }) => {
    const navigate = useNavigate()
    const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }
    const handleShowDetails = id => {
        navigate(`/toy/${id}`)
    }
    return (
        <td>
            {
                categorizedData.map(toy => {
                    return (
                        <div
                            key={toy._id}
                            className="grid grid-cols-4 gap-3 py-2 hover:shadow-lg"
                        >
                            <div className="col-span-1 p-1 max-h-40">
                                <img src={toy.photoURL} className="max-h-full" />
                            </div>
                            <div className="col-span-2 my-auto">
                                <p className="font-semibold">{toy.name}</p>
                                <p><small>${toy.price}</small></p>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={toy.rating}
                                    itemStyles={star}
                                    readOnly
                                />
                            </div>
                            <div className="col-span-1 h-full flex flex-col justify-around my-auto">
                                <div className="flex ">
                                    <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7]" onClick={()=>handleShowDetails(toy?._id)}>Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </td>
    );
};
ToyCard.propTypes = {
    categorizedData: PropTypes.any,
};
export default ToyCard;