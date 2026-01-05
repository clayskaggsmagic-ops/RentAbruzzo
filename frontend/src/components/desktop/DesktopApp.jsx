import { galleryByType, houseDetails, heroImage } from '../../content';
import '../../styles/desktop.css';
import HeroDesktop from './HeroDesktop';
import DetailsDesktop from './DetailsDesktop';
import GalleryDesktop from './GalleryDesktop';
import LocationDesktop from './LocationDesktop';
import ContactDesktop from './ContactDesktop';

export default function DesktopApp() {
    return (
        <div className="desktop-app">
            <HeroDesktop details={houseDetails} heroImage={heroImage} />
            <DetailsDesktop details={houseDetails} />
            <GalleryDesktop gallery={galleryByType} />
            <LocationDesktop details={houseDetails} />
            <ContactDesktop contact={houseDetails.contact} />
        </div>
    );
}
