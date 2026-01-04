import { useState } from 'react';
import Lightbox from '../shared/Lightbox';

export default function GalleryMobile({ gallery }) {
    const [activeTab, setActiveTab] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'bedrooms', label: 'Bedrooms' },
        { id: 'kitchen', label: 'Kitchen' },
        { id: 'bathroom', label: 'Baths' },
        { id: 'exterior', label: 'Exterior' },
    ];

    let displayedImages = [];
    if (activeTab === 'all') {
        Object.values(gallery).forEach(arr => displayedImages.push(...arr));
    } else if (activeTab === 'bedrooms') {
        displayedImages = [...gallery.bedroom1, ...gallery.bedroom2];
    } else {
        displayedImages = gallery[activeTab] || [];
    }

    displayedImages = [...new Set(displayedImages)];

    const openLightbox = (img) => {
        setLightboxImage(img);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <section className="gallery-mobile">
                <div className="container">
                    <h2 className="section-title-mobile">Gallery</h2>
                    <div className="gallery-tabs-mobile-scroll">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`tab-btn-mobile ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="gallery-feed-mobile">
                    {displayedImages.map((item, index) => (
                        <div
                            key={index}
                            className="gallery-item-mobile"
                            onClick={() => openLightbox(item)}
                        >
                            <img src={item.src} alt={item.label} loading="lazy" />
                            <div className="gallery-label-mobile">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Lightbox
                image={lightboxImage}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
            />
        </>
    );
}
