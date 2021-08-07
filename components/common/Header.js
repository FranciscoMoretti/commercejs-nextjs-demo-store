import React, { Component } from 'react';
import Link from 'next/link';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux'

const duration = 300;

const defaultStyle = {
  zIndex: '-1',
  transition: `height ${duration}ms ease-in-out`,
  height: 0
};

const transitionStyles = {
  entering: { height: '100vh' },
  entered: { height: '100vh' },
  exiting: { height: 0 },
  exited: { height: 0 }
};

const mobileMenuLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Shop',
    link: '/collection'
  },
  {
    name: 'About',
    link: '/about'
  }
];

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false,
    };

    this.header = React.createRef();

    this.animate = this.animate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.setState({
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }


  animate() {
    const { transparent } = this.props;

    if (!transparent) {return;}

    if (window.scrollY > 10) {
      this.header.current.classList.add('invert');
    } else {
      this.header.current.classList.remove('invert');
    }
  }

  toggleMobileMenu() {
    const { showMobileMenu } = this.state;
    this.setState({ showMobileMenu: !showMobileMenu });

    if (!showMobileMenu) {
      this.header.current.classList.add('invert');
    } else {
      this.animate();
    }
  }



  render() {
    const { showMobileMenu } = this.state;
    const { transparent } = this.props;

    return (
      <header className="position-fixed top-0 left-0 right-0 font-weight-semibold no-print">
        <div
          ref={this.header}
          className={`d-flex header align-items-center justify-content-between position-relative ${
            transparent ? '' : 'invert'
          }`}
        >
          <div className="d-none d-sm-flex">
            <Link href="/collection">
              <a href="/collection" className="mr-4 font-color-black">Shop</a>
            </Link>
            <Link href="/about">
              <a href="/about" className="font-color-black">
                About
              </a>
            </Link>
          </div>
          <div className="logo-container">
            <img
              src={`/icon/${showMobileMenu ? 'cross' : 'menu'}.svg`}
              onClick={this.toggleMobileMenu}
              className="w-32 mr-1 d-block d-sm-none"
              alt="Menu icon"
            />
            <Link href="/">
              <a>
                <img
                  src="/images/logo_text_black.svg"
                  className="logo cursor-pointer"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="d-flex">
            { process.browser && this.renderLoginLogout() }
            <div
              className="position-relative cursor-pointer"
              onClick={this.toggleCart}
            >
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition in={showMobileMenu} timeout={duration}>
          {state => (
            <div
              className="d-sm-none position-fixed left-0 right-0 overflow-hidden"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
                // Prevent gap being shown at bottom of mobile menu
                top: '1em'
              }}
            >
              <div
                className="position-absolute left-0 right-0 h-100vh mobile-menu-inner bg-black700 d-flex flex-column justify-content-center"
                style={{
                  // Prevent mobile menu items (e.g. Home) being hidden behind navbar on small screen heights (e.g. iPhone4 landscape of 320px height)
                  top: '4em'
                }}
              >
                {mobileMenuLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="d-block mb-4 font-size-heading font-color-white text-center"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </header>
    );
  }
}

export default connect(
  state => state,
)(Header);
