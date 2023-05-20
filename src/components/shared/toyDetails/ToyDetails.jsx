import { useLoaderData } from "react-router-dom";
import { Rating, ThinStar } from '@smastrom/react-rating';

const ToyDetails = () => {
    const toyData = useLoaderData()
    console.log(toyData);
    const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }

    return (
        <div className="grid lg:grid-cols-2 max-h-screen container mx-auto px-2 lg:px-0">
            <div className="">
                <img src={toyData.photoURL} className="lg:h-96 mx-auto" />
            </div>
            <div className="my-auto">
                <p className="text-4xl font-semibold mb-2">{toyData.name}</p>                
                <Rating
                    style={{ maxWidth: 80 }}
                    value={toyData.rating}
                    itemStyles={star}
                    readOnly
                />
                <p><small>Category: {toyData.category} character</small></p>
                <p className="text-lg text-[#FF4500]">${toyData.price}</p> 
                <p><small><span className="font-semibold">Items:</span> {toyData.availableQuantity} left.</small></p>
                <p><small><span className="font-semibold">Sold by:</span> {toyData.sellerName}</small></p>
                <p><small><span className="font-semibold"> Seller email:</span> { toyData.sellerEmail}</small></p>
                <p className="text-justify"><small><span className="font-semibold">Product Details:</span> { toyData.description}</small></p>
            </div>
            
        </div>
    );
};

export default ToyDetails;