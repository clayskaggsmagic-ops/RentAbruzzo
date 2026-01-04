export default function ContactDesktop({ contact }) {
    return (
        <footer className="contact-desktop">
            <div className="container contact-content">
                <h2 className="section-title white">Reserve Your Stay</h2>
                <p className="contact-note">{contact.note}</p>
                <a href={`tel:${contact.phone}`} className="contact-phone">
                    {contact.phone}
                </a>
                <div className="contact-divider"></div>
                <p className="copyright">© {new Date().getFullYear()} Castiglione Messer Raimondo Retreat</p>
            </div>
        </footer>
    );
}
