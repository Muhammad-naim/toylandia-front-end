import { useLoaderData } from "react-router-dom";
import { Rating, ThinStar } from '@smastrom/react-rating';
import useTitle from "../../../hooks/useTitle";

const AllToysPage = () => {
    useTitle('Toys')
    const toysData = useLoaderData();
    const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }

    return (
        <div className="container mx-auto">
            <div>
                {
                    toysData.map(toy => {
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
                                    <Rating
                                        style={{ maxWidth: 80 }}
                                        value={toy.rating}
                                        itemStyles={star}
                                        readOnly
                                    />
                                    <p><small>Category: {toy.category}</small></p>
                                    <p><small>Product left: {toy.availableQuantity}</small></p>
                                    <p><small>{toy.sellerName}</small></p>
                                </div>
                                <div className="col-span-1 h-full flex flex-col justify-around my-auto">
                                    <p>${toy.price}</p>
                                    <div className="flex ">
                                        <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] ">Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default AllToysPage;