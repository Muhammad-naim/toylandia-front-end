import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating, ThinStar } from '@smastrom/react-rating';
import useTitle from "../../../hooks/useTitle";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllToysPage = () => {
    useTitle('Toys')
    const navigate = useNavigate()
    const totalDataCount = useLoaderData();
    const [toyData, setToyData] = useState(null)
    const [feedback, setFeedback] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const totalData = totalDataCount.totalToys;
  
    useEffect(() => {
        fetch(`http://localhost:5000/toys?page=${currentPage}&limit=${20}`)
            .then(res => res.json())
            .then(data=>setToyData(data))
    }, [currentPage])
    const totalPages = Math.ceil(totalData / 20) ;
    const pageNumbers = [...Array(totalPages).keys()];

    const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }
    const handleShowDetails = id => {
        navigate(`/toys/${id}`)
    }
    const handleSubmit = event => {
        event.preventDefault();
        const keyword = event.target.search.value;
        const name = { name: keyword }
        fetch('https://toylandia-server.vercel.app/search-toy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setToyData(data)
                }
                else {
                    setToyData(null)
                    setFeedback('No data found!')
                }
            })
    }
    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="rounded-sm mb-2 flex items-center">
                <input type="search" name="search" placeholder="Search" className="py-1 px-2 rounded-md rounded-r-none bg-stone-100 focus:outline-none" />
                <button type="submit" className="btn btn-ghost btn-sm bg-slate-200 rounded-l-none"><FaSearch /></button>
            </form>
            <div>
                {toyData ? <>
                    {
                        toyData?.map(toy => {
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
                                            <button className=" border px-1 rounded bg-[#95B3E0] hover:bg-[#F379A7] " onClick={() => handleShowDetails(toy?._id)}>Details</button>
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
            <div className="my-2 text-center">
                {
                    pageNumbers.map(number => {
                        return <button
                            key={number}
                            className={`btn btn-ghost btn-sm mx-1 ${currentPage==number ? 'bg-[#95B3E0]' : ''}`}
                            onClick={()=>setCurrentPage(number)}
                        >
                        {number+1}
                        </button>
                    })
                }
            </div>
        </div>
    );
};

export default AllToysPage;