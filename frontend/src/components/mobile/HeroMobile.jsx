export default function HeroMobile({ details, images }) {
    const bgImage = images[0]?.src;

    return (
        <div className="hero-mobile" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-overlay-mobile">
                <div className="hero-content-mobile fade-in-up">
                    <h1 className="hero-title-mobile">{details.title}</h1>
                    <p className="hero-subtitle-mobile">{details.subtitle}</p>
                </div>
            </div>
        </div>
    );
}
