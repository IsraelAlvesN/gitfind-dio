/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

import Header from '../../components/Header';
import './styles.css';
import background from '../../assets/img/background.png';
import ItemList from '../../components/ItemList';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio } = newUser;
      setCurrentUser({ avatar_url, name, bio });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input
              name="user"
              placeholder="@username"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={handleGetData}>Search</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="profile">
                <img src={currentUser.avatar_url} className="profile-item" alt="profile github" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <h4 className="repositories">Repositories</h4>
              {repos.map((item) => (
                <ItemList key={item.id} title={item.name} description={item.description} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
