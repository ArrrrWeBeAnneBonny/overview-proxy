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
                <input type="search" value="" className="form-control location-search-input__input-field tt-input" placeholder="Try Yosemite, Napa, Moab..." dir="auto" style={{position:'relative', verticalAlign: 'top'}}/>
              </span>
              <div class="fas fa-search form-control-feedback location-search-input__search-icon"></div>
          </div>
        </div>

        <div className='right'>

        </div>
      </nav>
      </div>
    )
  }
}

export default NavBar;