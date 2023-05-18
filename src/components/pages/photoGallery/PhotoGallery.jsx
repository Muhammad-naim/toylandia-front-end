import PhotoAlbum from "react-photo-album";

const PhotoGallery = () => {

    const images = [
        {
          src: "https://media.istockphoto.com/id/471592903/photo/superman-and-bent-metal.jpg?s=1024x1024&w=is&k=20&c=Fh7WtvXE8OdEcqQEbSpWJXYJ8Bz5ComICPRtH8zPKsc=",
          width: 1024,
          height: 683
        },
        {
          src: "https://media.istockphoto.com/id/475636376/photo/strong-woman.jpg?s=612x612&w=0&k=20&c=S5OFJml2GlMje1WPP16FOtG_weEMNjk4XsAWOBurbZY=",
          width: 612,
          height: 408
        },
        {
          src: "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=",
          width: 406,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/458945985/photo/partners-against-crime.jpg?s=612x612&w=0&k=20&c=r6A4YzG_TAyGF2jGoJSwY6PizSqC9BcIi_PSQBfq5CA=",
          width: 612,
          height: 408
        },
        {
          src: "https://media.istockphoto.com/id/458602317/photo/superman.jpg?s=1024x1024&w=is&k=20&c=-K4vjnO6OiB1hkFOyn0y6we-HYaTK-GdTgnQ4v3t9GE=",
          width: 683,
          height: 1024
        },
        {
          src: "https://media.istockphoto.com/id/1329351359/photo/action-figure.jpg?s=612x612&w=0&k=20&c=TdK8Xv8y1A0rySuY4mf3q70JW-iY_tycLqvzMDWcIWw=",
          width: 408,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/475958128/photo/stormtrooper.jpg?s=612x612&w=0&k=20&c=SVMi2MAJkRwLB6E0NULtDEEusHImNOx0-PwwJorVJSo=",
          width: 408,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/475337380/photo/darth-vader-and-stormtroopers.jpg?s=612x612&w=0&k=20&c=Z31cOxKHV7jYzW4UBnLxYfFa2WuYbwr_w1DTV9_h174=",
          width: 612,
          height: 408
        },
        {
          src: "https://media.istockphoto.com/id/505379684/photo/action-figures.jpg?s=612x612&w=0&k=20&c=4FpeCjQRvh-lFF9Qr8eocwOomq51sjypRgMFsi_6iIA=",
          width: 408,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/527213324/photo/uniform.jpg?s=612x612&w=0&k=20&c=ZnajTTRVvutsfbD1AaRtr4PM1Dl1fefWxaXrMDmQBik=",
          width: 612,
          height: 408
        },
        {
          src: "https://media.istockphoto.com/id/471592903/photo/superman-and-bent-metal.jpg?s=1024x1024&w=is&k=20&c=Fh7WtvXE8OdEcqQEbSpWJXYJ8Bz5ComICPRtH8zPKsc=",
          width: 1024,
          height: 683
        },
        {
          src: "https://media.istockphoto.com/id/475636376/photo/strong-woman.jpg?s=612x612&w=0&k=20&c=S5OFJml2GlMje1WPP16FOtG_weEMNjk4XsAWOBurbZY=",
          width: 612,
          height: 408
        },
        {
          src: "https://media.istockphoto.com/id/476844832/photo/hulk-action-figure.jpg?s=612x612&w=0&k=20&c=J3b8TvEO02USYUEvOwd5vqyCTLk4HMMcFlYvyO5SRdA=",
          width: 406,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/458945985/photo/partners-against-crime.jpg?s=612x612&w=0&k=20&c=r6A4YzG_TAyGF2jGoJSwY6PizSqC9BcIi_PSQBfq5CA=",
          width: 612,
          height: 408
        },
        {
            src: "https://media.istockphoto.com/id/475636376/photo/strong-woman.jpg?s=612x612&w=0&k=20&c=S5OFJml2GlMje1WPP16FOtG_weEMNjk4XsAWOBurbZY=",
            width: 612,
            height: 408
          },
        {
          src: "https://media.istockphoto.com/id/458602317/photo/superman.jpg?s=1024x1024&w=is&k=20&c=-K4vjnO6OiB1hkFOyn0y6we-HYaTK-GdTgnQ4v3t9GE=",
          width: 683,
          height: 1024
        },
        {
          src: "https://media.istockphoto.com/id/1329351359/photo/action-figure.jpg?s=612x612&w=0&k=20&c=TdK8Xv8y1A0rySuY4mf3q70JW-iY_tycLqvzMDWcIWw=",
          width: 408,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/475958128/photo/stormtrooper.jpg?s=612x612&w=0&k=20&c=SVMi2MAJkRwLB6E0NULtDEEusHImNOx0-PwwJorVJSo=",
          width: 408,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/475337380/photo/darth-vader-and-stormtroopers.jpg?s=612x612&w=0&k=20&c=Z31cOxKHV7jYzW4UBnLxYfFa2WuYbwr_w1DTV9_h174=",
          width: 612,
          height: 408
        },
        {
          src: "https://media.istockphoto.com/id/505379684/photo/action-figures.jpg?s=612x612&w=0&k=20&c=4FpeCjQRvh-lFF9Qr8eocwOomq51sjypRgMFsi_6iIA=",
          width: 408,
          height: 612
        },
        {
          src: "https://media.istockphoto.com/id/527213324/photo/uniform.jpg?s=612x612&w=0&k=20&c=ZnajTTRVvutsfbD1AaRtr4PM1Dl1fefWxaXrMDmQBik=",
          width: 612,
          height: 408
        },
        {
          src: "https://media.istockphoto.com/id/527213324/photo/uniform.jpg?s=612x612&w=0&k=20&c=ZnajTTRVvutsfbD1AaRtr4PM1Dl1fefWxaXrMDmQBik=",
          width: 612,
          height: 408
        },
        {
            src: "https://media.istockphoto.com/id/475636376/photo/strong-woman.jpg?s=612x612&w=0&k=20&c=S5OFJml2GlMje1WPP16FOtG_weEMNjk4XsAWOBurbZY=",
            width: 612,
            height: 408
        },
        {
            src: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            width: 500,
            height: 333
        },
        {
            src: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            width: 500,
            height: 333
        },
        {
            src: "https://images.unsplash.com/photo-1670834169539-feed72d15b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWUlMjBhY3Rpb24lMjBmaWd1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            width: 374,
            height: 562
        },
        {
            src: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1lJTIwYWN0aW9uJTIwZmlndXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            width: 374,
            height: 562
        },
        {
            src: "https://media.istockphoto.com/id/458945985/photo/partners-against-crime.jpg?s=612x612&w=0&k=20&c=r6A4YzG_TAyGF2jGoJSwY6PizSqC9BcIi_PSQBfq5CA=",
            width: 612,
            height: 408
          },
        {
            src: "https://media.istockphoto.com/id/458945985/photo/partners-against-crime.jpg?s=612x612&w=0&k=20&c=r6A4YzG_TAyGF2jGoJSwY6PizSqC9BcIi_PSQBfq5CA=",
            width: 612,
            height: 408
          },
      ];


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