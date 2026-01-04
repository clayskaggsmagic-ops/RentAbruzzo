export default function DetailsMobile({ details }) {
    return (
        <section className="details-mobile container">
            <div className="details-header-mobile">
                <h2 className="section-title-mobile">The Property</h2>
                <p className="details-location-mobile">{details.location}</p>
            </div>

            <div className="details-specs-mobile">
                <div className="spec-item-mobile">
                    <span className="spec-number-mobile">{details.specs.guests}</span>
                    <span className="spec-label-mobile">Guests</span>
                </div>
                <div className="spec-item-mobile">
                    <span className="spec-number-mobile">{details.specs.bedrooms}</span>
                    <span className="spec-label-mobile">Bedrooms</span>
                </div>
                <div className="spec-item-mobile">
                    <span className="spec-number-mobile">{details.specs.beds}</span>
                    <span className="spec-label-mobile">Beds</span>
                </div>
                <div className="spec-item-mobile">
                    <span className="spec-number-mobile">{details.specs.baths}</span>
                    <span className="spec-label-mobile">Baths</span>
                </div>
            </div>

            <div className="details-text-mobile">
                <p>{details.description}</p>

                <div className="amenities-list-mobile">
                    <h3>Amenities</h3>
                    <ul>
                        {details.amenities.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {details.explore && (
                <div className="explore-mobile">
                    <h2 className="section-title-mobile center-mobile">Live the Region</h2>
                    <div className="explore-feed-mobile">
                        {details.explore.map((item, index) => (
                            <div key={index} className="explore-card-mobile">
                                {item.image && (
                                    <div className="explore-image-container-mobile">
                                        <img src={item.image} alt={item.title} className="explore-image-mobile" loading="lazy" />
                                    </div>
                                )}
                                <div className="explore-content-mobile">
                                    <h3 className="explore-title-mobile">{item.title}</h3>
                                    <p className="explore-text-mobile">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
