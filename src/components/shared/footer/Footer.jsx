import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer grid-cols-2 lg:grid-cols-4 p-10 pb-0  text-base-content">
                <div>
                    <img src="https://www.paseoelhatillo.com/wp-content/uploads/2021/07/toylandia.jpg" alt="LOGO" className='max-h-16 ' />
                    <h5 className='footer-title text-[#F61276] opacity-100'><Link to={"/"}>Toylandia</Link></h5>
                    <p>Block-C(3rd floor) <br /> Mouchi Tower, Malibagh<br />Dhaka-1200  </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover hover:text-[#F61276]">Home delivery</a>
                    <a className="link link-hover hover:text-[#F61276]">7-days return policy</a>
                    <a className="link link-hover hover:text-[#F61276]">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover hover:text-[#F61276]">About us</a>
                    <a className="link link-hover hover:text-[#F61276]">Contact</a>

                </div>
                <div>
                    <span className="footer-title  ">Socials</span>
                    <div className="grid grid-flow-col gap-4">
                        <button><FaTwitter className='h-6 w-6 hover:fill-[#F61276]' /></button>
                        <button><FaFacebookF className='h-6 w-6 hover:fill-[#F61276]' /></button>
                        <button><FaInstagram className='h-6 w-6 hover:fill-[#F61276]' /></button>
                    </div>
                </div>
            </footer>
            <p className='text-[#8F949A] text-center pb-4'>&#169; copyright 2023</p>
        </div>

    );
};
{/*  */ }
export default Footer;