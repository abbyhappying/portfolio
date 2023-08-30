import './skill.css'
import skilldata from './skilldata'


const Skills = () => {
  return (
    <section id="skill">
        <div className="skill__container ">
            <div className="skill-logo">
                {skilldata.map((item) => (
                    <div key={item.id} className='shadow-md hover:scale-110 duration-500'>
                        <img src={item.image} alt={`${item.title} icon`}  className="logo-image"/>
                        <p className='skill-name'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills
