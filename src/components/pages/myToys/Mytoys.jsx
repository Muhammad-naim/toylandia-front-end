import { useContext, useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";
import { Rating, ThinStar } from '@smastrom/react-rating';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Mytoys = () => {
    useTitle('My Toys')
    const navigate = useNavigate()
    const [mytoys, setMyToys] = useState(null)
    const [feedback, setFeedback] = useState('')
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/user-toys?email=${user?.email}`;
    const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setMyToys(data)
                }
                else {
                    setMyToys(null)
                    setFeedback('No data found')
                }
            })
    }, [url])
    const handleShowDetails = id => {
        navigate(`/toys/${id}`)
    }
    const handleUpdate = (id) => {
        navigate(`/update-toy/${id}`)
    }
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete-toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            const remaining = mytoys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                            Swal.fire({
                                title: 'Deleded',
                                text: 'Click Ok to continue',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                        }
                    })
            }
        })

    }
    return (
        <div className="container mx-auto">

            {mytoys ? <>
                {
                    mytoys?.map(toy => {
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
                                    <p><small><span className="font-semibold">Category: </span>{toy.category}</small></p>
                                    <p><small><span className="font-semibold">Product left: </span>{toy.availableQuantity}</small></p>
                                    <p><small><span className="font-semibold">Sold by: </span>{toy.sellerName}</small></p>
                                </div>
                                <div className="col-span-1 h-full flex flex-col justify-around my-auto">
                                    <p>${toy.price}</p>
                                    <div className="flex ">
                                        <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] " onClick={() => handleShowDetails(toy?._id)}>Details</button>
                                        <button
                                            className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] "
                                            onClick={() => handleUpdate(toy?._id)}
                                        >Update
                                        </button>
                                        <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] " onClick={() => handleDelete(toy?._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </> :
                <div className="text-center text-lg lg:my-2">
                    <span>{feedback}</span>
                </div>
            }
        </div>
    );
};

export default Mytoys;