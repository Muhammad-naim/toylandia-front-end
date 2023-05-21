import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../firebase/authProvider/AuthProvider';
 const CustomerFeedback = () => {
     const { user } = useContext(AuthContext);
     const [feedback, setFeedback] = useState([])  
     const [ischanged, setIsChange] = useState(true)

     useEffect(() => {
         fetch('https://toylandia-server.vercel.app/get-feedback')
             .then(res => res.json())
            .then(data=> setFeedback(data))
    },[ischanged])
    const handlefeedback = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const comment = form.comment.value;
        const photo = user?.photoURL;
        const feedback = { name, email, comment, photo }
        console.log(feedback);
        fetch('https://toylandia-server.vercel.app/add-feedback', {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                if (data?.acknowledged) {
                    setIsChange(!ischanged)
                }
            })
    }
    return (
        <div className="container mx-auto py-2 rounded-sm my-8 shadow-sm">
            <h1 className="text-center my-8 text-5xl font-heading text-[#F61276]">Customer feedback</h1>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className=''
                >
                    {
                        feedback.map((item) => {
                            return <SwiperSlide
                                key={item._id}
                                className='text-center h-20 my-8 font-tl-font'
                            >
                                <div className=' lg:w-1/3 p-2 h-full text-justify border mx-auto'>
                                    <div>
                                        <img src={item.photo} className='mx-auto h-20' />
                                    </div>
                                    <p>{item.name} says,</p>
                                    <p>{ item.comment}</p>
                                </div>
                            </SwiperSlide>
                        })
                    }
                    

                </Swiper>
                <div>
                    <form onSubmit={handlefeedback} className='border p-2 rounded my-2 grid lg:w-1/2 mx-auto items-center'>
                        <div>
                        <input type="text" name="name" defaultValue={user?.displayName}  className='bg-slate-100 p-1 rounded-sm border my-2'/>
                        <input type="email" name="email" defaultValue={user?.email} className='lg:mx-2 bg-slate-100 p-1 rounded-sm border my-2' /><br />
                        </div>
                        <textarea name="comment" cols="" rows="" placeholder='Your feedback' className='w-full p-2 bg-slate-100'></textarea><br />
                        <input type="submit" value="post" className='btn btn-sm btn-ghost bg-[#95B3E0] rounded-sm' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;