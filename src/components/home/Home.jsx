import CategorizedToys from "../pages/categorizedToys/CategorizedToys";
import CustomerFeedback from "../pages/customerFeedback/CustomerFeedback";
import PhotoGallery from "../pages/photoGallery/PhotoGallery";
import SponsorsPage from "../pages/sponsorsPage/SponsorsPage";
const Home = () => {
    return (
        <div className="bg-white relative z-200 ">
            <img src="https://demo.ishithemes.com/shopify/SHOPY126/asset/img/cloud.png" className="-translate-y-full" />
            <PhotoGallery />
            <CategorizedToys />
            <CustomerFeedback />
            <SponsorsPage/>
        </div>
    );
};

export default Home;