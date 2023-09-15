import './App.css'
import bg from './assets/images/apple_logo.png'
import iphone from './assets/images/iphone15.png'

function App() {


  return (
    <div className="container">
      <div className="bg">
        <img src={bg} alt="bg" />
      </div>
      <div className="blur"></div>
      <div className="iphone">
        <img src={iphone} alt="iphone" />
      </div>
      <div className="info">
        <p>Tez kunda ishka tushadi</p>
        <p>
          Telegram: <a href="https://t.me/ego_uz">@ego_uz</a>
        </p>
        <p>
          Telefon: <a href="tel:+998-95-277-22-22">+998-95-277-22-22</a>
        </p>
      </div>
    </div>
  );
}

export default App
