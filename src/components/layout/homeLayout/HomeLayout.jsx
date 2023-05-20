import useTitle from "../../../hooks/useTitle";
import Home from "../../home/Home";
import Banner from "../../pages/banner/Banner";

const HomeLayout = () => {
    useTitle('Home')
    return (
        <div style={{
            backgroundImage: `url('https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237221.jpg?w=740&t=st=1684385355~exp=1684385955~hmac=159753a80ab47caf4bcbdfea522cc1d6093369bf0f9523913e0e2a848f94a476')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        }} className="flex flex-col  ">
            <Banner />
            <Home/>
            
        </div>
    );
};

export default HomeLayout;