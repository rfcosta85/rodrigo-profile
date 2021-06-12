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
            <div className="col-xl-12 col-profile" data-mh="mh-col-profile">
              <div className="pr-lg-4">
                <h3 className="font-alt font-w-600 letter-spacing-2 title-extra-large text-uppercase text-white text-center">Olá meu nome é Rodrigo</h3>
                <p className="mt-4 text-large text-white">Rodrigo Costa, 35 anos, nascido e criado no Rio de Janeiro. Entusiasta do mundo front-end utilizando essa plataforma para por em prática os meus conhecimentos.</p>
                <hr size="8"></hr>
                <p className="mt-4 text-secondary text-large">Atualmente sou analista de infraestrutura na Land Rover Jaguar, atuando como estagiário. Além do cargo na Land Rover eu ainda atuo como redator em meu blog pessoal no Medium, onde trato assuntos aprendido durante o período letivo na universidade, e por fim também atuo como front-end developer como freelancer.</p>
                <div className="row pt-5">
                  <div className="col-md-6">
                    <span className="d-block font-alt letter-spacing-2 text-extra-large text-uppercase text-white">Contatos:</span>
                    <ul className="list-unstyled mt-2 text-secondary text-large">
                      <li>Rodrigo Costa</li>
                      <li>+55(21)99262-8651</li>
                      <li>rfcosta85@gmail.com</li>
                      <li><a className="text-secondary" href="https://rodrigo-profile4.vercel.app/" target="_blank" rel="noopener noreferrer">https://rodrigo-profile4.vercel.app/</a></li>
                      <li><a className="text-secondary" href="https://github.com/rfcosta85" target="_blank" rel="noopener noreferrer">https://github.com/rfcosta85</a></li>
                      <li><a className="text-secondary" href="https://www.linkedin.com/in/rfcosta85/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/rfcosta85/</a></li>
                      <li><a className="text-secondary" href="https://rfcosta85.medium.com/" target="_blank" rel="noopener noreferrer">https://rfcosta85.medium.com/</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </section>   
      <section className="bg-gray-dark-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="font-alt font-w-600 letter-spacing-2 title-extra-large text-uppercase text-white mt-5">O que eu posso fazer por você?</h3>
              <p className="mt-3 text-secondary text-extra-large"><i>Desde aplicativos web, a simples páginas web para apresentação pessoal, meu trabalho sempre terá um toque especial em sua necessidade, com o objetivo de tornar sonhos em realidade.</i></p>
              <hr size="8" className="hr"></hr>
            </div>            
          </div>
          <div class="row mt-5 pt-5">
                    <div class="col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-right border-gray-2" data-mh="mh-col-services">
                        <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                            <i class="icon-Chess text-base-color title-extra-large"></i>
                            <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">1. Strategy</span>
                            <hr size="8" className="service"></hr>
                            <p class="m-0 mt-3 text-secondary text-medium">Todos nossos projetos contam com um criterioso estudo estratégico, uma apresentação web ou uma aplicação web precisa saber exatamente o seu target e precisa saber com quais ferramentas será possível alcança-lo.</p>
                        </div>
                        
                    </div>
                   
                    
                    <div class="col-lg-4 border-md-0 border-bottom border-right border-gray-2 bg-dark" data-mh="mh-col-services">
                        <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                            <i class="icon-Leafs-2 text-base-color title-extra-large"></i>
                            <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">2. Branding</span>
                            <hr size="8" className="service"></hr>
                            <p class="m-0 mt-3 text-secondary text-medium">A valorização da marca é fundamental para a criação de uma identidade ao seu negócio e o cliente, é com ela que o seu cliente irá sempre lembrar de ti ao decidir comprar um produto.</p>
                        </div>
                        
                    </div>
                    
                    
                    <div class="col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-gray-2" data-mh="mh-col-services">
                        <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                            <i class="icon-Transform-2 text-base-color title-extra-large"></i>
                            <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">3. Web Design</span>
                            <hr size="8" className="service"></hr>
                            <p class="m-0 mt-3 text-secondary text-medium">Tenha presença online e rompa fronteira para conquistar novos clientes. Um bom site é capaz de não só capturar novos clientes, como também ajuda a criar uma fidelização.</p>
                        </div>
                       
                    </div>
                    
                    
                    <div class="col-lg-4 border-md-0 border-right border-gray-2 bg-dark" data-mh="mh-col-services">
                        <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                            <i class="icon-Speach-Bubble3 text-base-color title-extra-large"></i>
                            <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">4. Social Media</span>
                            <hr size="8" className="service"></hr>
                            <p class="m-0 mt-3 text-secondary text-medium">Ganhe destaque nas sociais medias e veja as receitas e representatividade de sua marcar crescer. A rede social hoje é um importante fator no desenvolvimento do seu negócio</p>
                        </div>
                        
                    </div>
                    
                    
                    <div class="col-lg-4 bg-gray-dark-3 border-md-0 border-right border-gray-2" data-mh="mh-col-services">
                        <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                            <i class="icon-Monitor-Tablet text-base-color title-extra-large"></i>
                            <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">5. Development</span>
                            <hr size="8" className="service"></hr>
                            <p class="m-0 mt-3 text-secondary text-medium">O desenvolvimento de novas aplicações e soluções de captura de dados podem tornar o seu negócio muito mais produtivo e com isso um consequente ganho de escala, fundamental para torná-lo mais competitivo que o seu concorrente.</p>
                        </div>
                        
                    </div>
                   
                    
                    <div class="col-lg-4" data-mh="mh-col-services">
                        <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left bg-dark">
                            <i class="icon-Consulting text-base-color title-extra-large"></i>
                            <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">6. Consulting</span>
                            <hr size="8" className="service"></hr>
                            <p class="m-0 mt-3 text-secondary text-medium">Saiba exatamente onde o seu negócio pode melhorar, ou simplesmente onde o seu negócio pode chegar, ao analisar novas possibilidades e oportunidades de negócios.</p>
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
