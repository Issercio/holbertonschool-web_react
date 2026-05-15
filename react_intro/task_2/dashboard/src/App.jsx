import HbSLogo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications.jsx';

export default function App() {
  const currentYear = getCurrentYear();
  const footerText = getFooterCopy(true);

  return (
    <div className="App">

      <div className="App-header">
        <img src={HbSLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <Notifications />

        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        <button>Ok</button>
      </div>

      <div className="App-footer">
        <p>Copyright {currentYear} - {footerText}</p>
      </div>

    </div>
  );
}