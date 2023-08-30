import Logo from '../../assets/logo.jpg'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)

          }

        </ul>
        <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        <button id='theme__icon'><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar