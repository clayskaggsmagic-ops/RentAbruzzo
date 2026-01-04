export default function ContactMobile({ contact }) {
    return (
        <footer className="contact-mobile">
            <div className="container">
                <h2 className="section-title-mobile white">Reserve</h2>
                <p className="contact-note-mobile">{contact.note}</p>
                <a href={`tel:${contact.phone}`} className="contact-button-mobile">
                    Call to Book
                </a>
                <p className="contact-number-display">{contact.phone}</p>
            </div>
        </footer>
    );
}
