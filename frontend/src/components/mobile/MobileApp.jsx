import { galleryByType, houseDetails, heroImage } from '../../content';
import '../../styles/mobile.css';
import HeroMobile from './HeroMobile';
import DetailsMobile from './DetailsMobile';
import GalleryMobile from './GalleryMobile';
import ContactMobile from './ContactMobile';

export default function MobileApp() {
    return (
        <div className="mobile-app">
            <HeroMobile details={houseDetails} heroImage={heroImage} />
            <DetailsMobile details={houseDetails} />
            <GalleryMobile gallery={galleryByType} />
            <ContactMobile contact={houseDetails.contact} />
        </div>
    );
}
