export default function DetailsDesktop({ details }) {
    return (
        <section className="details-desktop container">
            <div className="details-header fade-in-up">
                <h2 className="section-title">The Property</h2>
                <p className="details-location">{details.location}</p>
            </div>

            <div className="details-grid">
                <div className="details-text">
                    <p>{details.description}</p>

                    <div className="amenities-list">
                        <h3>Amenities</h3>
                        <ul>
                            {details.amenities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="details-specs">
                    <div className="spec-item">
                        <span className="spec-number">{details.specs.guests}</span>
                        <span className="spec-label">Guests</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-number">{details.specs.bedrooms}</span>
                        <span className="spec-label">Bedrooms</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-number">{details.specs.beds}</span>
                        <span className="spec-label">Beds</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-number">{details.specs.baths}</span>
                        <span className="spec-label">Baths</span>
                    </div>
                </div>
            </div>

            {details.explore && (
                <div className="explore-section fade-in-up">
                    <h2 className="section-title center">Experience Abruzzo</h2>
                    <div className="explore-grid">
                        {details.explore.map((item, index) => (
                            <div key={index} className="explore-card">
                                {item.image && (
                                    <div className="explore-image-container">
                                        <img src={item.image} alt={item.title} className="explore-image" loading="lazy" />
                                    </div>
                                )}
                                <div className="explore-content">
                                    <h3 className="explore-title">{item.title}</h3>
                                    <p className="explore-text">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
