import { useEffect, useState } from "react";
import "./Gallery.css"
const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [videos, setVideos] = useState([]);
    // const videos = [
    //     { url: "7lUhSYh0154" },
    //     { url: "uA9cTD1fz2M" },
    //     { url: "nEh4ae12hfo" },
    // ]

    useEffect(() => {
        fetch('http://localhost/buildeasy/public/api/gallery')
            .then(res => res.json())
            .then(data => setGallery(data.data));

        fetch('http://localhost/buildeasy/public/api/videos')
            .then(res => res.json())
            .then(data => data.data.map((video: any) => {
                return {
                    url: video.url.split('v=')[1].split('&')[0]
                }
            }))
            .then(data => setVideos(data));


    }, []);

    return (<>
        <div className="galleryContainer mt3">
            <div className="productSubHead">Buildeasy Gallery</div>
            <div className="productHead">Building with passion and precision</div>
            <div className="galleryImages mt3">
                {gallery.map((galleryItem) => {
                    return <div className="galleryItem" style={{ backgroundImage: `url("${import.meta.env.VITE_IMAGE_URL}${galleryItem.image}")` }}></div>
                })}
            </div>

        </div>
        <div className="galleryContainer">
            <div className="productSubHead">Buildeasy</div>
            <div className="productHead">Video Gallery</div>
            <div className="galleryImages mt3">
                {videos.map((video) => {
                    return <div className="videoItem" >
                        <iframe src={`https://www.youtube.com/embed/${video.url}`}
                            frameBorder='0'
                            height="200"
                            width="300"
                            // allow='autoplay; encrypted-media'
                            // allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                    </div>
                })}
            </div>
        </div>
    </>
    )
}

export default Gallery