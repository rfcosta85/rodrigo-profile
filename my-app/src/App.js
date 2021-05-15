import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="logo w-100" id="home">
        <div className="row align-items-center h-100 justify-content-center">
            <div className="col-lg-9 text-center">
                <h1 className="text-uppercase text-white h1-title">Eu sou Rodrigo Costa</h1>
                <span className="d-block text-white sub-title">Front-End Developer</span>
                <span className="d-block text-white skills mt-2">HTML5, CSS3, JavaScript, Bootstrap e React</span>
                <button type="button" className="btn mt-5 btn-design page-scroll justify-content-center text-white"><a href="#"></a>saiba mais</button>
            </div>
        </div>
    </aside> 
    </div>
  );
}

export default App;
