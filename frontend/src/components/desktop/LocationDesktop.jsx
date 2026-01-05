export default function LocationDesktop({ details }) {
    const { address } = details;
    const mapSrc = `https://maps.google.com/maps?q=${address.coordinates.lat},${address.coordinates.lng}&z=14&output=embed`;

    return (
        <section className="location-desktop">
            <div className="container">
                <div className="location-header">
                    <h2 className="section-title">The Location</h2>
                </div>

                <div className="location-content">
                    <div className="location-info">
                        <div className="address-block">
                            <h3 className="location-label">Address</h3>
                            <p className="location-text">{address.line1}</p>
                            <p className="location-text">{address.line2}</p>
                        </div>
                    </div>

                    <div className="map-container">
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
                </div>
            </div>
        </section>
    );
}
