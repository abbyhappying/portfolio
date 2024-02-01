import AboutImage from '../../assets/about.jpg'
import data from './data'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <ul>
                  <li>* 3+ years of coding experience specializing in Python, JavaScript</li>
                  <li>* Familiar with data analysis & cloud computing </li>
                  <li>* More than 8 years experience in data processing</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About
