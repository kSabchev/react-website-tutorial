import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/video/video-.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonsStyle='btn--outline' buttonSize='btn--large'> Get started</Button>
            </div>

            <div className="hero-btns">
                <Button className="btns" buttonsStyle='btn--primary' buttonSize='btn--large'> Watch trailer<i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
