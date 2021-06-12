import NavBar from './Components/navbar.jsx'
// import './style.css';

class Proxy extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavBar />

    )
  }
}

ReactDOM.render(<Proxy />, document.getElementById('proxy'));