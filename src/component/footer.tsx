import { useState } from "react";

const Footer = () => {
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
    <footer>
      <h3 id="foot">Subscribe to our newsletter</h3>
      <p id="footer">
        Lorem ipsum dolor sit amet consectetur adipiscing elit
        <br /> phasellus amet dui quam vitae quis leo velit aliquam.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            name="useremail"
            type="email"
            id="user-email"
            placeholder="Enter your email address"
            required
            onClick={() => {
              const email: HTMLElement | null =
                document.querySelector("#user-email");
              if (email) {
                email.style.outline = "none";
              }
            }}
            onChange={handleForm}
          />
          <button id="btn-1" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer; // Corrected component name to start with an uppercase letter
