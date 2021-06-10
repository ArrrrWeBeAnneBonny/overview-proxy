class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='banners'>
        <div className='top-banner'>
          <div className="covid-banner">
            <div className="banner-content">
              Recreate responsibly during COVID-19. Learn more <a target="_blank" className="underlined" href="https://www.hipcamp.com/journal/search/covid"> here</a>.
          </div>
          </div>
        </div>
        <nav className='main-navigation-bar'>
          <div className='left'>
            <div className="logo"><a href="https://www.hipcamp.com/en-US"><div className="logo-placeholder">&nbsp;</div></a></div>
            <div className="nav-bar-search">
              <span className='search-span'>
                <input type="search" value="" className="form-control location-search-input__input-field tt-input" placeholder="Try Yosemite, Napa, Moab..." dir="auto" style={{ position: 'relative', verticalAlign: 'top' }} />
              </span>
              <div className="fas fa-search form-control-feedback location-search-input__search-icon"></div>
            </div>
          </div>

          <div className='right'>
            <ul className='button-nav'>
              <li>
                <label itemprop="name"><a href="/en-US/discover">Near me</a></label>
              </li>
              <li className="drop-down-container logged-out-menu-dropdown">
                <label className="drop-down-target" >About</label>
                <div className="hide about-us-popover">
                  <ul>
                    <li><a href="/about#our-story/">About Us</a></li>
                    <li><a href="/about#our-values/">Our Values</a></li>
                    <li><a href="/about#careers/">Careers</a></li>
                    <li><a href="/journal/">Journal</a></li>
                    <li><a target="_blank" href="https://support.hipcamp.com">Help &amp; FAQ</a></li></ul>
                </div>
              </li>
              <li><label className="referral"><a href="/en-US/invite">Earn Hipcash</a></label></li>
            </ul>

            <div className='log-in-required'>
              <div class="user-menu">
                <button class="button-link">Log in</button>
                <button class="button-link">
                  <a href="#">Sign up</a>
                </button>
                <button class="button-link signup-button">
                  <a class="btn-solid-seafoam" href="/en-US/host">Start hosting</a>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;