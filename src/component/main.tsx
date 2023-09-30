import { Link } from "react-router-dom";

function MyComponent() {
  return (
    <div className="main-section">
      <section className="top">
        <img src="./img/Home Page img/main.jpg" alt="" id="eg-article-img" />
        <div className="tips">
          <Link to="blogs/blog1">
            <div className="tip-1">
              <h2>TIPS</h2>
              <p className="tip">
                How to choose the best
                <br /> management software
              </p>
            </div>
          </Link>
          <hr className="hr-displayed" />
          <Link to="blogs/blog3">
            <div className="tip-2">
              <h2>TIPS</h2>
              <p className="tip">
                3 tips to avoid Internet <br />
                <br className="small-break" /> distractions at work
              </p>
            </div>
          </Link>
          <hr className="hr-displayed" />
          <Link to="blogs/blog4">
            <div className="tip-3">
              <h2>RESOURCES</h2>
              <p className="tip">
                7 great productivity apps
                <br className="small-break" /> <br />
                for your new iPad
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MyComponent;
