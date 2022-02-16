import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsDark(true) : setIsDark(false);
    });
  });

  return (
    <div
      id="menu-wrap"
      className={`menu-back cbp-af-header ${
        isDark ? "cbp-af-header-shrink" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-0">
              <Link
                className="navbar-brand"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
                style={{ cursor: "pointer" }}
              >
                <img src="/assets/img/logo.png" alt="Landboard" width={250} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="navbar-toggler-icon">
                  <span className="menu-icon__line menu-icon__line-left" />
                  <span className="menu-icon__line" />
                  <span className="menu-icon__line menu-icon__line-right" />
                </span>
              </button>
              <div
                className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                id="navbarSupportedContent"
              >
                <ul id="onepage" className="navbar-nav ml-auto">
                  <li
                    id="menu-item-472"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-472"
                  >
                    <Link
                      activeClass="active"
                      to="concept"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={100}
                      className="nav-link"
                    >
                      Concept
                    </Link>
                  </li>
                  <li
                    id="menu-item-468"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-468"
                  >
                    <Link
                      activeClass="active"
                      to="roadmap"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={100}
                      className="nav-link"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li
                    id="menu-item-471"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-471"
                  >
                    <Link
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={100}
                      className="nav-link"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li
                    id="menu-item-472"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-472"
                  >
                    <a
                      href="https://gateway.pinata.cloud/ipfs/QmRe3cCFxdc8H4xSxsY1RaBsu9ndnFypcEpuCDac6C9EnL "
                      className="nav-link"
                    >
                      Litepaper
                    </a>
                  </li>
                  <li
                    id="menu-item-473"
                    className="nav-item menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-473"
                  ></li>
                </ul>
                <div className="header-btn">
                  <a
                    className="btn btn-primary js-tilt"
                    href="#app"
                    role="button"
                    data-tilt-perspective={300}
                    data-tilt-speed={700}
                    data-tilt-max={24}
                  >
                    <span>Presale</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
