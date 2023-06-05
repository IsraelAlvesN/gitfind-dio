/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Header from '../../components/Header';
import './styles.css';
import background from '../../assets/img/background.png';
import ItemList from '../../components/ItemList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="user" placeholder="@username" />
            <button type="button">Search</button>
          </div>
          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/95243089?v=4" className="profile-item" alt="profile github" />
            <div>
              <h3>Israel Alves</h3>
              <span>@israel</span>
              <p>Description</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositories">Repositories</h4>
            <ItemList title="Teste1" description="Descricao" />
            <ItemList title="Teste1" description="Descricao" />
            <ItemList title="Teste1" description="Descricao" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
