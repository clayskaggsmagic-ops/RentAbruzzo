export default function LocationMobile({ details }) {
    const { address } = details;
    const mapSrc = `https://maps.google.com/maps?q=${address.coordinates.lat},${address.coordinates.lng}&z=14&output=embed`;

    return (
        <section className="location-mobile">
            <div className="container">
                <div className="location-header-mobile">
                    <h2 className="section-title-mobile center-mobile">Location</h2>
                </div>

                <div className="map-card-mobile">
                    <div className="map-container-mobile">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Property Location"
                        ></iframe>
                    </div>

                    <div className="location-info-mobile">
                        <p className="address-text-mobile">{address.line1}</p>
                        <p className="address-text-mobile">{address.line2}</p>

                        <a
                            href={`https://maps.google.com/?q=${address.coordinates.lat},${address.coordinates.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="directions-btn-mobile"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
