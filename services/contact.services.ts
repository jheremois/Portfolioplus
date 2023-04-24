const contactService = (formData: any) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }
    return fetch('api/contact', options)
}

export default contactService