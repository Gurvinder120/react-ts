import { Link } from "react-router-dom";
import { useState } from "react";

function nav() {
  const [isCatMenuVisible, setIsCatMenuVisible] = useState(false);

  const handleClick_1 = () => {
    if (window.innerWidth <= 768) {
      // Adjust the breakpoint as needed
      const subMenu: HTMLElement | null = document.querySelector(".sub");
      if (subMenu) {
        if (isCatMenuVisible) {
          subMenu.style.display = "none";
        } else {
          subMenu.style.display = "block";
        }
        setIsCatMenuVisible(!isCatMenuVisible);
      }
    }
  };

  const handleClick_2 = () => {
    if (window.innerWidth <= 768) {
      // Adjust the breakpoint as needed
      const cats: HTMLElement | null = document.querySelector(".cats");
      if (cats) {
        if (isCatMenuVisible) {
          cats.style.display = "none";
        } else {
          cats.style.display = "block";
        }
        setIsCatMenuVisible(!isCatMenuVisible);
      }
    }
  };

  return (
    <>
      <nav>
        <div className="top-nav">
          <h2 id="logo">
            <Link to="/">TITLE</Link>
          </h2>
        </div>
        <div className="btns">
          <i
            id="list"
            className="ph ph-list"
            onClick={() => {
              const menu: HTMLElement | null = document.querySelector(".menu");
              if (menu) {
                menu.classList.add("menu-open");
              }
              const closeBtn: HTMLElement | null =
                document.querySelector("#close");
              const listBtn: HTMLElement | null =
                document.querySelector("#btn");
              if (listBtn) {
                listBtn.style.display = "none";
              }
              if (closeBtn) {
                closeBtn.style.display = "block";
              }
            }}
          ></i>
          <i
            id="close"
            className="ph ph-x"
            onClick={() => {
              const menu: HTMLElement | null = document.querySelector(".menu");
              if (menu) {
                menu.classList.remove("menu-open");
              }
              const closeBtn: HTMLElement | null =
                document.querySelector("#close");
              const listBtn: HTMLElement | null =
                document.querySelector("#btn");
              if (closeBtn) {
                closeBtn.style.display = "none";
              }
              if (listBtn) {
                listBtn.style.display = "block";
              }
            }}
          ></i>
        </div>
        <ul className="menu">
          <li className="menu-items">
            <Link to="">HOME</Link>
          </li>
          <li
            className="menu-items"
            id="page"
            onClick={() => {
              handleClick_1();
            }}
          >
            PAGES
            <i className="ph-bold ph-caret-down arrow-down"></i>
            <ul className="sub">
              <div className="pages">
                <li id="heading_pages">PAGES</li>
                <li className="sub-items">
                  <Link to="/">Home</Link>
                </li>
                <li className="sub-items">
                  <Link to="./blogs">BlogPost</Link>
                </li>
                <li className="sub-items">
                  <Link to="">Subscribe</Link>
                </li>
                <li className="sub-items">
                  <Link to="contact">Contact</Link>
                </li>
              </div>
              <div className="utils">
                <li id="heading_utility">UTITILY</li>
                <li className="utility">
                  <Link to="">Start Here</Link>
                </li>
              </div>
            </ul>
          </li>
          <li
            className="menu-items"
            id="cat"
            onClick={() => {
              handleClick_2();
            }}
          >
            CATEGORIES <i className="ph-bold ph-caret-down arrow-down"></i>
            <ul className="cats">
              <li className="cat-items">
                <Link to="">Tips</Link>
              </li>
              <li className="cat-items">
                <Link to="">Resources</Link>
              </li>
              <li className="cat-items">
                <Link to="">Guides</Link>
              </li>
            </ul>
          </li>
          <li className="menu-items">
            <Link to="contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default nav;
