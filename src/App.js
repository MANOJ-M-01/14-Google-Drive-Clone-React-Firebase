import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/google-drive-logo.png'

import { auth, provider } from "./firebase";
import { useState } from 'react';

function App() {
  // const [user, setUser] = useState()
  const [user, setUser] = useState({
    displayName: "MANOJ M",
    email: "manoj@gmail.com.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://lh3.googleusercontent.com/ogw/ADGmqu_dOlatpT1b0X58PYT4ffHYvQrisUVhYwbTTl2TSQ=s32-c-mo"
  })

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <br/>
              <Sidebar />
              <br/>
              <FilesView /><br/>
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;
