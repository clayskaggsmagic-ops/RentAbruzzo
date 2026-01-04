import { useState } from 'react';

export default function GalleryMobile({ gallery }) {
    const [activeTab, setActiveTab] = useState('all');

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

    return (
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
                {displayedImages.map((src, index) => (
                    <div key={index} className="gallery-item-mobile">
                        <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}
