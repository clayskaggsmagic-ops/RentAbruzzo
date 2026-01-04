import { useEffect, useState } from 'react';

export default function HeroDesktop({ details, heroImage }) {
    // Use the explicit hero image passed from content
    const bgImage = heroImage;

    return (
        <div className="hero-desktop" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">{details.title}</h1>
                    <p className="hero-subtitle">{details.subtitle}</p>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Scroll to Explore</span>
                </div>
            </div>
        </div>
    );
}
