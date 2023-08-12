import "./Gallery.css"
const Gallery = () => {
    const gallery = [
        { galleryText: "", image: 'gallery_img1.jpg' },
        { galleryText: "", image: 'gallery_img2.jpg' },
        { galleryText: "", image: 'gallery_img3.jpg' },
        { galleryText: "", image: 'gallery_img4.jpg' },
        { galleryText: "", image: 'gallery_img5.jpg' },
        { galleryText: "", image: 'gallery_img6.jpg' },
        { galleryText: "", image: 'gallery_img7.jpg' },
        { galleryText: "", image: 'gallery_img8.jpg' },
        { galleryText: "", image: 'gallery_img9.jpg' },
        { galleryText: "", image: 'gallery_img10.jpg' },
        { galleryText: "", image: 'gallery_img11.jpg' },
        { galleryText: "", image: 'gallery_img12.jpg' },
        { galleryText: "", image: 'gallery_img13.jpg' },
    ]
    const videos = [
        { url: "7lUhSYh0154" },
        { url: "uA9cTD1fz2M" },
        { url: "nEh4ae12hfo" },
    ]
    return (<>
        <div className="galleryContainer mt3">
            <div className="productSubHead">Buildeasy Gallery</div>
            <div className="productHead">Building with passion and precision</div>
            <div className="galleryImages mt3">
                {gallery.map((galleryItem) => {
                    return <div className="galleryItem" style={{ backgroundImage: `url("/images/gallery/${galleryItem.image}")` }}></div>
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