import { useEffect, useState } from 'react';

export default function Lightbox({ image, isOpen, onClose }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Small delay to allow render before animation
            setTimeout(() => setVisible(true), 10);
        } else {
            document.body.style.overflow = '';
            setVisible(false);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen && !visible) return null;

    return (
        <div
            className={`lightbox-overlay ${visible ? 'visible' : ''}`}
            onClick={onClose}
        >
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <img src={image?.src} alt={image?.label} className="lightbox-image" />
                <div className="lightbox-caption">
                    <h3>{image?.label}</h3>
                </div>
                <button className="lightbox-close" onClick={onClose}>×</button>
            </div>
        </div>
    );
}
