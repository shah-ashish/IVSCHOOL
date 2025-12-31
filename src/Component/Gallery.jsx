import { useState } from 'react';

// Gallery data
const galleryData = {
  title: "Our School Gallery",
  subtitle: "Glimpses of life at THE i.v. international school",
  images: [
    { id: 1, image: "img1.jpeg" },
    { id: 2, image: "img2.jpeg" },
    { id: 3, image: "img3.jpeg" },
    { id: 4, image: "img4.jpeg" },
    { id: 5, image: "img5.jpeg" },
    { id: 6, image: "img6.jpeg" },
    { id: 7, image: "img7.jpeg" },
    { id: 8, image: "img8.jpeg" },
    { id: 9, image: "img9.jpeg" },
    { id: 10, image: "img10.jpeg" },
    { id: 11, image: "img11.jpeg" },
    { id: 12, image: "img12.jpeg" },
    { id: 13, image: "img13.jpeg" }
  ]
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
const images = import.meta.glob("../assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const getImage = (name) => images[`../assets/${name}`];

  return (
    <section id='gallery' className="py-6 md:py-10 bg-gradient-to-b from-white to-blue-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
       <div className="text-center mb-12 sm:mb-16 ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Gallery
            </h2>
          </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryData.images.map((image, index) => (
            <div
              key={image.id}
               loading="lazy"
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                index % 5 === 0 ? 'sm:row-span-2' : ''
              }`}
              style={{
                minHeight: index % 5 === 0 ? '400px' : '250px'
              }}
            >
              {/* Image */}
              <img
               src={getImage(image.image)}
                alt={`Gallery image ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mt-2 text-white/80 text-sm">
                    <span className="material-symbols-outlined text-xl mr-1">
                      photo_camera
                    </span>
                    <span>View Photo</span>
                  </div>
                </div>
              </div>

              {/* Corner Icon */}
              <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-blue-900 text-xl">
                  zoom_in
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">
              close
            </span>
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
               src={getImage(selectedImage.image)}
 loading="lazy"
            
              alt={`Gallery image ${selectedImage.id}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;