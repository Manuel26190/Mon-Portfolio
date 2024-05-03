import React, { useState } from 'react'
import IconLink from './IconLink'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import './PortfolioBlock.css'
import Modal from './Modal'

function PortfolioBlock(props) {
    const { image, live, source, title } = props

    const [isOpen, setOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)

    const handleOpen = () => {
        setOpen(!isOpen)
    }

    if (!live || live.length === 4) {
        return (
            <div className={'box-first-container'}>
                <p className="portfolio-title">{title}</p>
                <a className="project-link" onClick={handleOpen}>
                    <div className="border-div">
                        <div className="container">
                            <img
                                className="background-img"
                                src={image}
                                alt={title}
                            ></img>
                        </div>
                    </div>
                </a>
                {isOpen && <Modal />}
                <div className={'portfolio'} py={'2rem'}>
                    <div className={'icon-box'} p={1}>
                        <IconLink
                            link={source}
                            title={'Source Code'}
                            icon={faCode}
                        />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={'box-first-container'}>
                <h5 className="portfolio-title">{title}</h5>
                <a href={live} target="_blank" rel="noreferrer">
                    <div className="border-div">
                        <div className="container">
                            <img
                                className="background-img"
                                src={image}
                                alt={title}
                            ></img>
                        </div>
                    </div>
                </a>
                <div className={'portfolio'} py={'2rem'}>
                    <div className={'icon-box'} p={1}>
                        <IconLink
                            link={source}
                            title={'Source Code'}
                            icon={faCode}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioBlock
