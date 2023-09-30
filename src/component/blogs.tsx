import { Link } from "react-router-dom";

function App() {
  return (
    <div className="for-flex-1">
      <div className="articles">
        <h2 id="art">Latest articles</h2>
        <div className="article-1">
          <Link to="blogs/blog1">
            <img id="article-1-img" src="./img/Home Page img/1.jpg" alt="" />
            <div id="article-1-des">
              <h4>TIPS</h4>
              <h3>
                How to choose the best <br className="small-break" />
                <br /> management <br className="break" /> software
              </h3>
              <p id="art-1">
                Viverra tristique gravida dolor vel aenean egestas
                <br className="small-break" />
                <br />
                libero enim
                <br className="break" /> consequat arcu augue euismod est.
              </p>
            </div>
          </Link>
        </div>
        <div className="article-2">
          <Link to="blogs/blog2">
            <img id="article-2-img" src="./img/Home Page img/2.jpeg" alt="" />
            <div id="article-2-des">
              <h4>RESOURCES</h4>
              <h3>
                10 productivity tools that are <br />
                <br className="small-break" />
                worth
                <br className="break" /> checking out
              </h3>
              <p id="art-2">
                Viverra tristique gravida dolor vel aenean egestas
                <br className="small-break" />
                <br />
                libero enim consequat
                <br className="break" /> arcu augue euismod est.
              </p>
            </div>
          </Link>
        </div>
        <div className="article-3">
          <Link to="blogs/blog3">
            <img id="article-3-img" src="./img/Home Page img/3.jpg" alt="" />
            <div id="article-3-des">
              <h4>TIPS</h4>
              <h3>
                3 tips to avoid Internet
                <br className="small-break" /> <br />
                distractions at
                <br className="break" /> work
              </h3>
              <p id="art-3">
                Viverra tristique gravida dolor vel aenean egestas
                <br />
                <br className="small-break" />
                libero enim consequat
                <br className="break" />
                arcu augue euismod est.
              </p>
            </div>
          </Link>
        </div>
        <div className="article-4">
          <Link to="blogs/blog4">
            <img id="article-4-img" src="./img/Home Page img/4.jpeg" alt="" />
            <div id="article-4-des">
              <h4>RESOURCES</h4>
              <h3>
                7 great productivity apps for
                <br className="small-break" /> <br />
                your new <br className="break" />
                iPad
              </h3>
              <p id="art-4">
                Viverra tristique gravida dolor vel aenean egestas
                <br className="small-break" />
                <br />
                libero enim consequat
                <br className="break" />
                arcu augue euismod est.
              </p>
            </div>
          </Link>
        </div>
        <div className="article-5">
          <Link to="blogs/blog5">
            <img id="article-5-img" src="./img/Home Page img/5.jpg" alt="" />
            <div id="article-5-des">
              <h4>GUIDES</h4>
              <h3>
                How to create an organized
                <br className="small-break" /> <br />
                productivity
                <br className="break" /> plan for the year
              </h3>
              <p id="art-5">
                Viverra tristique gravida dolor vel aenean egestas
                <br />
                <br className="small-break" />
                libero enim
                <br className="break" /> consequatarcu augue euismod est.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="right-arts">
        <div className="des-right">
          <h5>
            <p id="title">Title</p>
          </h5>
          <p id="right-art-p">
            Tellus id nisl blandit vitae quam magna nisl
            <br /> aliquet aliquam arcu ultricies commodo <br /> felisoler massa
            ipsum erat non sit amet.
          </p>
          <input
            id="art-search"
            type="text"
            placeholder="Search articles"
            onClick={() => {
              const email: HTMLElement | null =
                document.querySelector("#art-search");
              if (email) {
                email.style.outline = "none";
                email.style.border = "1px solid gray";
              }
            }}
          />
        </div>
        <hr id="r-a-s" />
        <div className="btn-right">
          <button className="art-cat">TIPS</button>
          <button className="art-cat" id="big_btn">
            RESOURCES
          </button>
          <button className="art-cat">GUIDES</button>
        </div>
        <div className="art-eg">
          <Link to="blogs/blog1">
            <div className="overlay">
              <p id="head-eg">RESOURCES</p>
              <p id="p-eg">
                How to choose the best <br /> management software
              </p>
            </div>
            <div className="img-holder">
              <img
                src="./img/Home Page img/blah (1).jpg"
                className="eg-img"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="popular">
          <h2 id="popular-head">Popular articles</h2>
          <Link to="blogs/blog2">
            <div className="popular-1">
              <img id="pop-1" src="./img/Home Page img/popualr-1.jpg" alt="" />
              <p id="pop-1-des">
                10 Best <br /> collaboration
                <br className="small-break" /> <br /> software for your <br />
                team
              </p>
            </div>
          </Link>
          <Link to="blogs/blog2">
            <div className="popular-2">
              <img src="./img/Home Page img/popular-2.jpg" alt="" id="pop-2" />
              <p id="pop-2-des">
                A complete guide <br /> to learn <br className="small-break" />
                project <br /> management
              </p>
            </div>
          </Link>
          <Link to="blogs/blog3">
            <div className="popular-3">
              <img src="./img/Home Page img/popular-3.jpg" alt="" id="pop-3" />
              <p id="pop-3-des">
                How time tracking <br /> can <br className="small-break" />
                improve team <br />
                management
              </p>
            </div>
          </Link>
          <Link to="blogs/blog4">
            <div className="popular-4">
              <img
                id="pop-4"
                src="./img/Home Page img/pexels-thisisengineering-3861969.jpg"
                alt=""
              />
              <p id="pop-4-des">
                10 Best <br /> collaboration
                <br className="small-break" /> <br /> software for your <br />
                team
              </p>
            </div>
          </Link>
          <Link to="blogs/blog5">
            <div className="popular-5">
              <img
                id="pop-5"
                src="./img/Home Page img/nick-morrison-FHnnjk1Yj7Y-unsplash (1).jpg"
                alt=""
              />
              <p id="pop-5-des">
                10 Best <br /> collaboration
                <br className="small-break" /> <br /> software for your <br />
                team
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
