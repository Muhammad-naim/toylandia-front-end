import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer  p-10 bg-base-200 text-base-content">
            <div>
                <h1 className="text-3xl font-bold">Toylandia</h1>
                <div>
                    <div>
                        <ul>
                            <li>Contact Us</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <span className="footer-title opacity-100 text-[#F61276]">Socials</span>
                <div className="grid grid-flow-col gap-4">
                    <FaTwitter className='h-6 w-6 hover:fill-[#F61276]'/>
                    <FaFacebookF className='h-6 w-6 hover:fill-[#F61276]'/>
                    <FaInstagram className='h-6 w-6 hover:fill-[#F61276]'/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;