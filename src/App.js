import "./App.css";
import Address from "./components/RestaurantComponents/Address";
import MainContent from "./components/RestaurantComponents/MainContent";
import RestaurantLogo from "./components/RestaurantComponents/RestaurantLogo";
import SiderList from "./components/RestaurantComponents/SiderList";
import SocialNetworks from "./components/RestaurantComponents/SocialNetworks";
import CustomTableComponent from "./components/SpecificCaseComponents/CustomTableComponent";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* TODO: update the following components style to correspond with ./components/RestaurantComponents/FinalRenderExpected.jpg picture */}
      <div>
        <Address />
        <MainContent />
        <RestaurantLogo />
        <SiderList />
        <SocialNetworks />
      </div>

      {/* TODO: try to center inline filter component menu items */}
      <div>
        <CustomTableComponent />
      </div>
    </div>
  );
}

export default App;
