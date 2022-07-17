import logo from '../../assets/img/logo.svg'
import './estilo.css'

function Header() {

  return(
    <header>
      <div className="dsmeta-logo-container">
        
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>
            <a href="linkedin.com/in/jpaulohdev97"> Dev Jpauloh9</a>
            </p>
        </div>
    </header>
  )

  }

export default Header
