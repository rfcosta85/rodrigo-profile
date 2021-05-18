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
                <button type="button" className="btn mt-5 btn-design page-scroll justify-content-center text-white"><a href="https://www.google.com.br/"></a>saiba mais</button>
            </div>            
        </div>

        <nav id="navigation" className="navbar navbar-dark navbar-expand-lg bg-dark">
          <div className="container">
            <div className="navbar-header d-lg-none">
              <a className="navbar-brand page-scroll">RODRIGO</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-rodrigo" aria-controls="navbar-rodrigo" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse justify-content-center" id="navbar-rodrigo">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link page-scroll">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>     
      </aside> 
    </div>
  );
}

export default App;
