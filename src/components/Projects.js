import { Link } from 'react-router-dom'
import { projects } from './../data'

const Projects = () => {
    return (
        <div className='section' id='projects'>
            <h3 className='title'>Projects</h3>
            <div className='projects'>
                <ul>
                    {
                        [...projects].reverse().map((item, i) => (
                            <li  key={ i }>
                                <Link to={ item.url }>
                                    <h4>{ item.name }</h4>
                                    <p>{ item.content }</p>
                                    <span><strong>Working period</strong>{ item.period }</span>
                                    <span><strong>{ item.type } Project</strong>{ item.role }</span>
                                    <ul>
                                        {
                                            item.skill.map((s, j) => (
                                                <li key={ j }>{`#${ s }`}</li>    
                                            ))
                                        }
                                    </ul>
                                    <ul className='skill'>
                                        {
                                            item.skill.map((s, j) => (
                                                <li key={ j } className={ s }></li>    
                                            ))
                                        }
                                    </ul>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Projects