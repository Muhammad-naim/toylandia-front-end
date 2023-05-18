import Banner from "../pages/banner/Banner";
import CategorizedToys from "../pages/categorizedToys/CategorizedToys";
import PhotoGallery from "../pages/photoGallery/PhotoGallery";

const Home = () => {
    return (
        <div className="bg-white z-20 ">
            <img src="https://demo.ishithemes.com/shopify/SHOPY126/asset/img/cloud.png" className="-translate-y-full" />

            <PhotoGallery />
            <CategorizedToys/>
        </div>
    );
};

export default Home;