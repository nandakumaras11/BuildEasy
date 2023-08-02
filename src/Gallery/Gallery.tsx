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
    return (
        <div className="galleryContainer">
            <div className="productSubHead">Buildeasy Gallery</div>
            <div className="productHead">Building with passion and precision</div>
            <div className="galleryImages">
                {gallery.map((galleryItem) => {
                    return <div className="galleryItem" style={{ backgroundImage: `url("/images/gallery/${galleryItem.image}")` }}></div>
                })}
            </div>
        </div>
    )
}

export default Gallery