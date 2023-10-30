import { useState } from "react";

function Contact() {
  const [form, setFrom] = useState({});

  const handleForm = (e: any) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <div className="user-feedback">
        <input
          type="email"
          name="useremail"
          id="user-email"
          placeholder="Enter your email"
          onChange={handleForm}
        />
        <textarea
          name="userfeedback"
          id="user-feedback"
          placeholder="Enter something"
          onChange={handleForm}
        />
        <input type="submit" id="submit-btn" value="Submit" />
      </div>
    </form>
  );
}

export default Contact;
