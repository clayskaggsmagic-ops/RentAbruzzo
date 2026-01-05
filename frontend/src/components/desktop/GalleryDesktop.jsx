import { useState } from 'react';
import Lightbox from '../shared/Lightbox';

export default function GalleryDesktop({ gallery }) {
    const [activeTab, setActiveTab] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const categories = [
        { id: 'all', label: 'All Photos' },
        { id: 'bedrooms', label: 'Bedrooms' },
        { id: 'living', label: 'Living Areas' },
        { id: 'kitchen', label: 'Kitchen' },
        { id: 'bathroom', label: 'Bathrooms' },
        { id: 'exterior', label: 'Additional Photos' }, // Renamed
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

    // Custom Sort: Move Exterior_7 to the front for 'All' view
    if (activeTab === 'all') {
        const featuredIndex = displayedImages.findIndex(img => img.src.includes('Exterior_7'));
        if (featuredIndex > -1) {
            const featured = displayedImages.splice(featuredIndex, 1)[0];
            displayedImages.unshift(featured);
        }
    }

    const openLightbox = (img) => {
        setLightboxImage(img);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <section className="gallery-desktop container">
                <div className="gallery-header">
                    <h2 className="section-title">Gallery</h2>
                    <div className="gallery-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="gallery-grid fade-in-up">
                    {displayedImages.map((item, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => openLightbox(item)}
                        >
                            <img src={item.src} alt={item.label} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="gallery-label">{item.label}</span>
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
