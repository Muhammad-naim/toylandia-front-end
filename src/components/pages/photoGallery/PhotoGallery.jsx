import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

const PhotoGallery = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('https://toylandia-server.vercel.app/toysphotos')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(error=>console.log(error.message))
    },[])


    return (
        <div className="container mx-auto">
            <h2 className="text-5xl text-center mb-8 font-bold">Toys Gallery</h2>
            <PhotoAlbum
                layout="masonry"
                photos={images} 
                spacing={9}
                columns={5} 
                />
        </div>
    );
}
export default PhotoGallery;