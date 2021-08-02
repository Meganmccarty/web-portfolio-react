import { useState } from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';

function ContactForm() {
    const defaultForm = {
        'name': "",
        'email': "",
        'text': ""
    }

    const [formData, setFormData] = useState(defaultForm)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted")
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }

        fetch('http://localhost:9393/messages', configObj)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field
                id='form-input-control-name'
                control={Input}
                label='Name'
                placeholder='Name'
                name='name'
                onChange={handleChange}
            />

            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='Email address'
                name='email'
                onChange={handleChange}
            />
            <Form.Field
                id='form-textarea-control-message'
                control={TextArea}
                label='Message'
                placeholder='Email message'
                name='text'
                onChange={handleChange}
            />

            <button className="ui button blue-button">Submit</button>
        </Form>
    )
}

export default ContactForm;