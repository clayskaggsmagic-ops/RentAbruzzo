import { useState } from 'react';

export default function GalleryDesktop({ gallery }) {
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { id: 'all', label: 'All Photos' },
        { id: 'bedrooms', label: 'Bedrooms' },
        { id: 'living', label: 'Living Areas' },
        { id: 'kitchen', label: 'Kitchen' },
        { id: 'bathroom', label: 'Bathrooms' },
        { id: 'exterior', label: 'Exterior' },
    ];

    // Flatten logic or selective logic
    let displayedImages = [];
    if (activeTab === 'all') {
        // Combine all arrays
        Object.values(gallery).forEach(arr => displayedImages.push(...arr));
    } else if (activeTab === 'bedrooms') {
        displayedImages = [...gallery.bedroom1, ...gallery.bedroom2];
    } else {
        displayedImages = gallery[activeTab] || [];
    }

    // Deduplicate just in case
    displayedImages = [...new Set(displayedImages)];

    return (
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
                {displayedImages.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}
