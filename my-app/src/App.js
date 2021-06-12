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
        <nav id="navigation" className="navbar navbar-dark navbar-expand bg-dark">
            <div className="container justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="#home" className="nav-link page-scroll">Home</a>
                    </li>
                    <li className="nav-item">
                      <a href="#profile" className="nav-link page-scroll">Profile</a>
                    </li>
                    <li className="nav-item">
                      <a href="Contact" className="nav-link page-scroll">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>  
        <section id="profile" className="bg-gray-dark-2 overflow-hidden py-0 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-profile" data-mh="mh-col-profile">
              <div className="pr-lg-4">
                <h3 className="font-alt font-w-600 letter-spacing-2 title-extra-large text-uppercase text-white">Olá meu nome é Rodrigo</h3>
                <p className="mt-4 text-large text-white">Rodrigo Costa, 35 anos, nascido e criado no Rio de Janeiro. Entusiasta do mundo front-end utilizando essa plataforma para por em prática os meus conhecimentos.</p>
                <span className="bg-base-color mt-4 sep-line-medium-thick"></span>
                <p className="mt-4 text-secondary text-large">Atualmente sou analista de infra estrutura na Land Rover Jaguar, atuando como estagiário. Além do cargo na Land Rover eu ainda atuo como redator em meu blog pessoal no Medium, onde trato assuntos aprendido durante o período letivo na universidade, e por fim também atuo como front-end developer como freelancer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>      
      </aside>      
    </div>
  );
}

export default App;
