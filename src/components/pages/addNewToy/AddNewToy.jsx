import CreatableSelect from 'react-select/creatable';
import Swal from 'sweetalert2'
import useTitle from "../../../hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";

const AddNewToy = () => {
    const { user } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState(null);
    useTitle('Add New Toy')
    const options = [
        { value: 'anime', label: 'anime' },
        { value: 'DC', label: 'DC' },
        { value: 'marvel', label: 'marvel' }
    ]
    const handleNewToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.ProductName.value;
        const photoURL = form.photoURL.value;
        const category = selectedOption.value;
        const price = parseFloat(form.price.value).toFixed(2);
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        const sellerName = form.name.value;
        const sellerEmail = form.email.value;
        // console.log(name, photoURL, category, price, availableQuantity, description, rating, sellerName, sellerName);
        const newToy = { name, photoURL, category, price, availableQuantity, description, rating, sellerName, sellerEmail}
        fetch('https://toylandia-server.vercel.app/new-toy', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Product added',
                        text: 'Click Ok to continue',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div>
            <div className="hero font-tl-font mb-12">
                <div className="hero-content ">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-2xl font-bold mt-4">Add new toy</h1>
                        </div>
                        <form onSubmit={handleNewToy} className="card-body grid lg:grid-cols-3 lg:gap-2 px-4 gap-0 py-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Product name</span>
                                </label>
                                <input type="text" name="ProductName" required placeholder="Product name" className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photoURL" required placeholder="Photo URL" className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Category</span>
                                </label>
                                <CreatableSelect onChange={setSelectedOption} isClearable options={options} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" required placeholder="Price" className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Rating</span>
                                </label>
                                <input type="text" name="rating" required placeholder="Rating" className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" required placeholder="Quantity" className="input input-bordered h-8" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Product description</span>
                                </label>
                                <input type="text" name="description" required placeholder="Product description" className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} className="input input-bordered h-8" />
                            </div>
                            <div className="form-control lg:col-span-3 justify-center mx-auto mt-4">
                                <button className="btn btn-ghost btn-sm btn-outline">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewToy;