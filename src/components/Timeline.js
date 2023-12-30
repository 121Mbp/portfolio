import { useEffect, useRef, useState } from 'react'
import { timeline } from './../data'

const Timeline = () => {
    const [id, setId] = useState('timeline-0')

    const useIntersectionObserver = param => {
        const rowRef = useRef({})

        useEffect(() => {
            const callback = entries => {
                entries.forEach((element) => {
                    rowRef.current[element.target.id] = element
                });

                const visible = Object.values(rowRef.current).filter(
                    (element) => element.isIntersecting
                )
                if(visible[0] === undefined) return
                setId(visible[0].target.id)
            }

            const observer = new IntersectionObserver(callback, {
                rootMargin: '-260px 0px',
                threshold: 1
            })

            const row = [...document.querySelectorAll('.row')]
            row.forEach((element) => observer.observe(element))

            return () => observer.disconnect()
        }, [ param ])
    }

    useIntersectionObserver(setId)

    return (
        <div className='section' id='timeline'>
            <h3 className='title'>Experience</h3>
            <div className='timeline'>
                {
                    timeline.map((item, i) => (
                        <div key={ i } className={`row ${ item.type }`} id={`timeline-${ i }`}>
                            <p className={ id === `timeline-${ i }` ? 'on' : '' }>{ item.content }</p>
                            <span>{ item.date }</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Timeline