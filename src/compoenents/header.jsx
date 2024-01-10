import logo from '../logo.svg';

const Header = () => {
    return ( <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>

    <nav>
        <ul>
          <li> Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>

        </ul>
    </nav>
  </header> );
}
 
export default Header;