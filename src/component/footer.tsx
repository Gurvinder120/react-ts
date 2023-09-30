const Footer = () => {
  return (
    <footer>
      <h3 id="foot">Subscribe to our newsletter</h3>
      <p id="footer">
        {" "}
        {/* Changed the ID to make it unique */}
        Lorem ipsum dolor sit amet consectetur adipiscing elit
        <br /> phasellus amet dui quam vitae quis leo velit aliquam.
      </p>
      <div className="input">
        <input
          type="email"
          id="user-email"
          placeholder="Enter your email address"
          pattern=".+@globex\.com"
          required onClick={()=>{
            const email:HTMLElement | null = document.querySelector('#user-email')
            if (email) {
              email.style.outline = 'none'
            }
          }}
        />
        <button id="btn-1" type="submit">
          Subscribe
        </button>
      </div>
    </footer>
  );
};

export default Footer; // Corrected component name to start with an uppercase letter
