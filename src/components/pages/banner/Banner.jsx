import { Link } from 'react-router-dom';
import image from '../../../assets/dl.beatsnoop.com-JynzCWpHga-removebg-preview.png'
const Banner = () => {
    return (
        <div className=" lg:h-screen sticky top-16 z-1 mb-4" >
            <div className=" hero grid-cols-2 lg:h-full lg:w-3/4 mx-auto   ">
                <div className='text-center lg:text-left '>
                    <h1 className="lg:text-5xl font-heading  font-bold">find the best toys for your sweetheart!</h1>
                    <Link to={'/toys'} className="btn btn-ghost text-white btn-xs lg:btn-sm lg:my-6 bg-[#527fc2] hover:bg-[#F379A7] ">Explore</Link>
                </div>
                <div className='col-span-1 w-full'>
                    <img src={image} className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Banner;