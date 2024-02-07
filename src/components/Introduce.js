import { Link } from 'react-router-dom'
import { introduce } from './../data'

const Introduce = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return (
        <div className='section' id='introduce'>
            <div className='introduce'>
                <span>{ `${ year }. ${ month }. ${  day }` } </span>
                <h2>
                    <p>안녕하세요. <span>👋🏻</span></p>
                    { introduce.name }
                </h2>
                <ul>
                    {
                        introduce.contact.map((item, i) => (
                            <li key={ i } className={ item.name }><Link to={ item.url } target='_blank'>{ item.brand }</Link></li>
                        ))
                    }
                </ul>
                {/* <p>
                    { introduce.appeal }
                    <Link to={ introduce.contact[1].url } target='_blank'>more +</Link>
                </p> */}
            </div>
        </div>
    )
}

export default Introduce