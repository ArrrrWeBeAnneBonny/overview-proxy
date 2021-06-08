class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='top-banner'>
        <div class="covid-banner">
          <div className="banner-content">
            Recreate responsibly during COVID-19. Learn more <a target="_blank" className="underlined" href="https://www.hipcamp.com/journal/search/covid"> here</a>.
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;