"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import cartData from "../../data/cartData";
import { navbarData } from "../../public/data/navbarData";
import tag from "/public/images/icon/btn/tag.png";
import logo from "/public/images/logo.png";

const languageDropdownData = [
  {
    value: "En",
  },
  {
    value: "Bn",
  },
  {
    value: "Hp",
  },
  {
    value: "Frn",
  },
];

const Header = () => {
  const [open, setOpen] = useState("");
  const [windowHeight, setWindowHeight] = useState(0);
  const [show, setShow] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [langDropdown, setLanguageDropdown] = useState(
    languageDropdownData[0].value
  );

  const setLanguageDropdownValue = (value) => {
    setLanguageDropdown(value);
  };

  const handleOpen = (e) => {
    if (open !== e.target.text) {
      setOpen(e.target.text);
    } else {
      setOpen("");
    }
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  const pathName = usePathname();

  return (
    <header
      id="gotoTop"
      className={`header ${
        windowHeight > 50 && "menu-fixed animated fadeInDown"
      }`}
    >
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-xl p-0 align-items-center">
            <Link href="/" className="site-logo site-title">
              <Image src={logo} alt="logo" />
              <span className="logo-icon">
                <i className="flaticon-fire"></i>
              </span>
            </Link>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              onClick={() => setShow(!show)}
              //data-bs-toggle="collapse"
              // data-bs-target="#navbarContent"
              // aria-controls="navbarContent"
              //aria-expanded="false"
              //aria-label="Toggle navigation"
            >
              <span className="menu-toggle"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${show && "show"}`}
              // id="navbarContent"
            >
              <ul className="navbar-nav main-menu ms-auto">
                {navbarData.map(({ id, menuTitle, path, menuItems }) => {
                  let isActive = menuItems?.some(
                    (path) => pathName == path.menuItemPath
                  );

                  return menuItems ? (
                    <li
                      key={`${id}`}
                      className={`menu_has_children ${
                        open === `${menuTitle}` ? "open" : ""
                      }`}
                    >
                      <div className="d-flex align-items-center">
                        <Link
                          href="/#"
                          onClick={(e) => handleOpen(e)}
                          className={` ${isActive ? "menu-active" : ""}`}
                        >
                          {menuTitle}
                        </Link>
                        <i className="las la-angle-down"></i>
                      </div>
                      <ul className="sub-menu">
                        {menuItems.map(({ id, title, menuItemPath }) => (
                          <li key={`${id}`}>
                            <Link
                              href={menuItemPath}
                              onClick={() => setShow(false)}
                              className={`${
                                pathName === menuItemPath && "sub-menu-active"
                              }`}
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={`${id}`}>
                      <Link
                        href={`${path}`}
                        onClick={() => setShow(false)}
                        className={`${pathName === path ? "menu-active" : ""}`}
                      >
                        {menuTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="nav-right">
                <Link href="/contest" className="cmn-btn style--three btn--sm">
                  <Image src={tag} alt="icon" className="me-1" /> Comprar Tickets
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
