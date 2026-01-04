import { galleryByType, houseDetails } from '../../content';
import '../../styles/desktop.css';
import HeroDesktop from './HeroDesktop';
import DetailsDesktop from './DetailsDesktop';
import GalleryDesktop from './GalleryDesktop';
import ContactDesktop from './ContactDesktop';

export default function DesktopApp() {
    return (
        <div className="desktop-app">
            <HeroDesktop details={houseDetails} images={galleryByType.exterior} />
            <DetailsDesktop details={houseDetails} />
            <GalleryDesktop gallery={galleryByType} />
            <ContactDesktop contact={houseDetails.contact} />
        </div>
    );
}
