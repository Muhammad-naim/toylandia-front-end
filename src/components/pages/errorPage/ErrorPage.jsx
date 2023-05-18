import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <div>
            <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1684401245~exp=1684401845~hmac=35564831b6efbfd119a3b5ee2a8a40a3285b8dccf3252d4843d66828184828c6" alt="error" className="max-w-lg mx-auto mt-10"/>
            </div>
            <div className="">
                <p className="text-red-700">Not Found!</p>
                <p>Back to <Link to={'/'}>Home</Link></p>
            </div>
        </div>
    );
};

export default ErrorPage;