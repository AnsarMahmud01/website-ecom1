import React, { useState } from 'react';
import "./RegistrationForm.css"

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Success")
        console.log(formData);
        // Add code here to send form data to the server
    }

    return (
        <div className='registration-form'>
            <form className='form-group' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="firstName">Аты-жөні:</label>
                    <input type="text" name="firstName" id="firstName" onChange={handleInputChange} value={formData.firstName} />
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Тегі:</label>
                    <input type="text" name="lastName" id="lastName" onChange={handleInputChange} value={formData.lastName} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleInputChange} value={formData.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" onChange={handleInputChange} value={formData.password} />
                </div>
                <button type="submit">Тіркелу</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
