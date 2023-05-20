import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyData = useLoaderData()
    console.log(toyData);
    return (
        <div>
            this is details
        </div>
    );
};

export default ToyDetails;