import { Link } from 'react-router-dom';
import image from '../../../assets/dl.beatsnoop.com-JynzCWpHga-removebg-preview.png'
const Banner = () => {
    return (
        <div className=" h-screen sticky top-16 z-1" >
            <div className="hero flex h-full w-3/4 mx-auto  ">
                <div>
                <h1 className="text-5xl font-heading font-bold">find the best toys for your sweetheart!</h1>
                <Link to={'/toys'} className="btn btn-ghost btn-sm my-6 bg-[#527fc2] hover:bg-[#F379A7] ">Explore</Link>
                </div>
                <div className='w-2/3'>
                <img src={image} className='w-full' />
            </div>
            </div>
        </div>
    );
};

export default Banner;