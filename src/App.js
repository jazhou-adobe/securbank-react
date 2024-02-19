import logo from './resources/SecurBank_Logo_Main.svg';
import bell from './resources/bell.svg';
import banner from './resources/banner.png';
import avatar from './resources/avatar.png';
import './App.css';
import Articles from './components/articles';
import Accountbalance from './components/accountbalance';
import Transactions from './components/transactions';
import Expenses from './components/expenses';
import CreditCardDetails from './components/creditcarddetails';
import Footer from './components/footer';
import Text from './components/text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-alerts'>
            <p><strong>Alert!</strong> Scams are growing ever more complex and sophisticated. Learn more about protecting yourself from scams</p>
        </div>
        <div className='header-nav'>
          <div>
            <img src={logo} className="logo" alt="logo" />
            <div>
              <ul>
                <li><strong>Dashboard</strong></li>
                <li><a href="#">Saving Account</a></li>
                <li><a href="#">Transactions</a></li>
                <li><a href="#">Cards</a></li>
              </ul>
            </div>
            <div>
              <img src={bell} className="bell" alt="bell" />
              <div className='authFriendly'>John Smith</div>
            </div>
          </div>
      </div>
        
      </header>
      <main>
        <div className='section'>
          <div><img src={banner} className="banner" alt="banner" /></div>
          <div className='twocol'>
            <Accountbalance />
            <CreditCardDetails />
          </div>
          <div className='twocol'>
            <Transactions/>
            <Expenses />
          </div>
          <div>
            <Articles />
          </div>
          <div className="newsletter">
            <Text itemID="urn:aemconnection:/content/wknd/us/en/newsletter/jcr:content/root/container/text" itemProp="text" itemType="richtext" />     
            <button>Subscribe</button>  
          </div>
        </div>
      </main>

      <footer><Footer /></footer>
    </div>
  );
}

export default App;
