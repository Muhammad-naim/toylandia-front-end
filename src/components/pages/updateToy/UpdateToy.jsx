import { useLoaderData} from "react-router-dom";
import Swal from 'sweetalert2'
const UpdateToy = () => {
    const data = useLoaderData()
    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        const updatedToy = { price, availableQuantity, description }
        fetch(`http://localhost:5000/update-toy/${data?._id}`, {
            method: "PATCH",
            headers:{
            "Content-type": "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res=>res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated successfully',
                        text: 'Click Ok to continue',                        
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }
    return (
        <div >
            <div className="hero lg:my-20 font-tl-font ">
                <div className="hero-content my-auto">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-2xl font-bold mt-4">Add new toy</h1>
                        </div>
                        <form onSubmit={handleUpdateToy} className="card-body grid lg:grid-cols-3 lg:gap-2 px-4 gap-0 py-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" required defaultValue={data.price}  className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name="quantity" required defaultValue={data.availableQuantity}  className="input input-bordered h-8" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Product description</span>
                                </label>
                                <input type="text" name="description" required defaultValue={data.description}  className="input input-bordered h-8" />
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

export default UpdateToy;