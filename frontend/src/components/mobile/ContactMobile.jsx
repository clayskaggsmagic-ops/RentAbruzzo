export default function ContactMobile({ contact }) {
    return (
        <footer className="contact-mobile">
            <div className="container">
                <h2 className="section-title-mobile white">Reserve</h2>
                <p className="contact-note-mobile">{contact.note}</p>
                <a href={`tel:${contact.phone}`} className="contact-button-mobile">
                    Call to Book
                </a>
                <div className="contact-footer-mobile">
                    <p className="contact-number-display">{contact.phone}</p>
                    <a href={`mailto:${contact.email}`} className="contact-email-mobile">{contact.email}</a>
                </div>
            </div>
        </footer>
    );
}
