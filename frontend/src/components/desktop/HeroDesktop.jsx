import { useEffect, useState } from 'react';

export default function HeroDesktop({ details, images }) {
    // Use a nice exterior shot. Prefer one that looks wide.
    // We can cycle them or just pick one. Let's pick Exterior_4 or 7 as they were large files, likely high res.
    // Actually, randoming it or just taking the first one. Let's take the first one passed.
    const bgImage = images[0];

    return (
        <div className="hero-desktop" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">{details.title}</h1>
                    <p className="hero-subtitle">{details.subtitle}</p>
                    <div className="hero-scroll-indicator">
                        <span>Scroll to Explore</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
