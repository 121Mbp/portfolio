import Introduce from './Introduce'
import Timeline from './Timeline'
import Projects from './Projects'
import Skillset from './Skillset'
import Tools from './Tools'

const Contents = () => {
    return (
        <div className='content'>
            <div className='inner'>
                <Introduce />
                <Timeline />
                <Projects />
                <Skillset />
                <Tools />
            </div>
        </div>
    )
}

export default Contents