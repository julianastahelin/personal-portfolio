function ContactSection ({content}) {
    return (
        <section>
        <h2>{content.contactSection.title}</h2>
        <ul>
            {content.contactSection.contact.map((contact) => <li key={contact.title}>{contact.title} - {contact.address}</li>)}
        </ul>
    </section>
    )
}

export default ContactSection