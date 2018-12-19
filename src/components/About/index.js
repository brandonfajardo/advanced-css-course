import React, { Fragment } from 'react'
import './index.scss'
import photo1 from "../../img/nat-1-large.jpg"
import photo2 from "../../img/nat-2-large.jpg"
import photo3 from "../../img/nat-3-large.jpg"

const About = () => {
    return (
        <div className="about-section">
            <h2 className="heading__secondary u__text--center u__margin--big">
                Exciting tours for adventurous people
            </h2>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading__tertiary u__margin--small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <h3 className="heading__tertiary u__margin--small">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img alt="Photo 1" src={photo1} className="composition__photo composition__photo--p1" />
                        <img alt="Photo 2" src={photo2} className="composition__photo composition__photo--p2" />
                        <img alt="Photo 3" src={photo3} className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About