export default function ContactDesktop({ contact }) {
    return (
        <footer className="contact-desktop">
            <div className="container contact-content">
                <h2 className="section-title white">Reserve Your Stay</h2>
                <p className="contact-note">{contact.note}</p>
                <div className="contact-actions">
                    <a href={`tel:${contact.phone}`} className="contact-action">
                        {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="contact-action">
                        {contact.email}
                    </a>
                </div>
            </div>
        </footer>
    );
}
