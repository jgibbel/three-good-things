import React, { useState } from 'react';

const Form = () => {
    const [success, setSuccess] = useState(false);

    const submit = (e) => {
        e.preventDefault()
        // debugger;
        fetch('https://script.google.com/macros/s/AKfycbwC3b4uWJWJ4iS3n1UJSiKz2FyOorUiRJg8k8zuttWvj5hD36eh/exec', { method: 'POST', body: new FormData(e.target)})
          .then(response => setSuccess(true))
          .catch(error => console.error('Error!', error.message))
        e.target.reset()
    }

    return (
        <div>
        <p>Get three good things in your inbox:</p>
        <form onSubmit={submit} name="submit-to-google-sheet">
        <label for="name">Name</label>
        <input name="name" type="text" placeholder="Name"></input>
        <label for="email">Email</label>
        <input name="email" type="email" placeholder="Email" required></input>
        {success ? <p>Thank you!</p> : null}
        <button className="form-button" type="submit">Send</button>
        </form>
        
        </div>
    );
}

export default Form;
