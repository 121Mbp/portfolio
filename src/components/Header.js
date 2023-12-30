import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [id, setId] = useState('introduce')

    const useIntersectionObserver = param => {
        const sectionRef = useRef({})

        useEffect(() => {
            const callback = entries => {
                entries.forEach((element) => {
                    sectionRef.current[element.target.id] = element
                });

                const visible = Object.values(sectionRef.current).filter(
                    (element) => element.isIntersecting
                )
                setId(visible[0].target.id)
            }

            const observer = new IntersectionObserver(callback, {
                rootMargin: '-20px 0px',
                threshold: [0, 0.5, 1]
            })

            const sections = [...document.querySelectorAll('.section')]
            sections.forEach((element) => observer.observe(element))

            return () => observer.disconnect()
        }, [ param ])
    }

    useIntersectionObserver(setId)

    const handleScroll = e => {
        const el = e.target.hash
        document.querySelector(el)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='header'>
            <ul>
                <li className='home'>
                    <Link to='#introduce' 
                        className={ id === 'introduce' ? 'active': ''}
                        onClick={ handleScroll }
                    >
                        back to top
                    </Link>
                </li>
                <li className='list'>
                    <Link to='#timeline' 
                        className={ id === 'timeline' ? 'active': ''}
                        onClick={ handleScroll }
                    >
                        timeline
                    </Link>
                </li>
                <li className='grid'>
                    <Link to='#projects' 
                        className={ id === 'projects' ? 'active': ''}
                        onClick={ handleScroll }
                    >
                        projects
                    </Link>
                </li>
                <li className='code'>
                    <Link to='#skillset' 
                        className={ id === 'skillset' ? 'active': ''}
                        onClick={ handleScroll }
                    >
                        technology
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header