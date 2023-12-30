import { skillset } from '../data'

const Skillset = () => {
    return (
        <div className='section' id='skillset'>
            <h3 className='title'>Skillset</h3>
            <div className='technology'>
                <ul className='skill'>
                    {
                        skillset.map((item, i)=>(
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

export default Skillset