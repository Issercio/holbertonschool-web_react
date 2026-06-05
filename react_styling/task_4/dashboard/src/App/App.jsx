import { Component, Fragment } from 'react';
import Notifications from '../Notifications/Notifications.jsx';
import Header from '../Header/Header.jsx';
import LoginForm from '../Login/Login.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import Footer from '../Footer/Footer.jsx';
import BodySection from '../BodySection/BodySection.jsx';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx'
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  handleKeyDown = (e) => {
    if ('ctrlKey' in e && 'key' in e) {
      if (e.ctrlKey && e.key === 'h') {
        window.alert('Logging you out');
        this.props.logOut();
      }
    }
  }

  render() {
    // Déclaration de notificationsList
    const notificationsList = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: getLatestNotification()}
    ];
    // Déclaration de coursesList
    const coursesList = [
      { id: 1, name: 'ES6', credit: '60'},
      { id: 2, name: 'Webpack', credit: '20'},
      { id: 3, name: 'React', credit: '40'}
    ];

    return (
      <Fragment>
        <div className="header flex flex-col md:flex-row justify-between items-start md:items-center px-2 md:px-4 py-2 md:py-4">
          <div className="header-wrapper grow w-full md:w-auto">
            <Header />
          </div>
          <div className="root-notifications w-full md:w-auto mt-4 md:mt-0">
            <Notifications notifications={notificationsList} />
          </div>
        </div>
        <div className="flex flex-col flex-1 px-2 md:px-4">
          {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title={'Course list'}>
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>:
            <BodySectionWithMarginBottom title={'Log in to continue'}>
              <LoginForm />
            </BodySectionWithMarginBottom>
          }
          <BodySection title={'News from the School'}>
            <p>ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?</p>
          </BodySection>
        </div>
        <Footer />
      </Fragment>
    )
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App
