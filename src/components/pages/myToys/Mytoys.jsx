import { useContext, useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";
import { Rating, ThinStar } from '@smastrom/react-rating';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Select from 'react-select'
import { FaEdit, FaRegEye, FaTrash } from "react-icons/fa";


const Mytoys = () => {
    useTitle('My Toys')
    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState(null);
    const [mytoys, setMyToys] = useState(null)
    const [feedback, setFeedback] = useState('')
    const { user } = useContext(AuthContext)
    const url = `https://toylandia-server.vercel.app/user-toys?email=${user?.email}`;


    const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }
    const options = [
        { value: 1, label: 'ascending' },
        { value: -1, label: 'descending' },
    ]

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

    useEffect(() => {
        if (selectedOption) {
            fetch(`https://toylandia-server.vercel.app/sorted-toys?value=${selectedOption?.value}&email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
        }
        
    },[selectedOption])


    const handleShowDetails = id => {
        navigate(`/toys/${id}`)
    }
    const handleUpdate = (id) => {
        navigate(`/update-toy/${id}`)
    }
    const handleDelete = (id) => {
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
                fetch(`https://toylandia-server.vercel.app/delete-toy/${id}`, {
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
                <div className="lg:w-48 lg:my-2">
                    <Select onChange={setSelectedOption} options={options} />
                </div>
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
                                    <div className="flex flex-col lg:flex-row lg:justify-start">
                                        <button className=" mx-2 border p-2 rounded bg-[#95B3E0] hover:bg-[#F379A7] " onClick={() => handleShowDetails(toy?._id)}><FaRegEye/></button>
                                        <button
                                            className="mx-2 border p-2 rounded bg-[#95B3E0] hover:bg-[#F379A7] "
                                            onClick={() => handleUpdate(toy?._id)}
                                        ><FaEdit/>
                                        </button>
                                        <button className="mx-2 border p-2 rounded bg-[#95B3E0] hover:bg-[#F379A7] " onClick={() => handleDelete(toy?._id)}><FaTrash/></button>
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