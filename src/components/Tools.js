import { tools } from '../data'

const Tools = () => {
    return (
        <div className='section' id='tools'>
            <h3 className='title'>Tools</h3>
            <div className='technology'>
                <ul className='skill'>
                    {
                        tools.map((item, i)=>(
                            <li key={ i } className={`${ item.name } ${ !item.learn ? 'disabled' : '' }`}>
                                <span>{ item.lang }</span>
                            </li>    
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Tools