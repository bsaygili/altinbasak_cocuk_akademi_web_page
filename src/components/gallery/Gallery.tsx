import React from 'react'
import arrowRight from "../../assets/common/arrow_right.png";
import { homePageImages } from '../../data';

import './gallery.scss'

const Gallery: React.FC = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handleSlideChange = (direction: string) => {
        if (direction === "left") {
            setCurrentSlide(
                currentSlide > 0 ? currentSlide - 1 : homePageImages.length - 1
            );
        } else {
            setCurrentSlide(
                currentSlide < homePageImages.length - 1 ? currentSlide + 1 : 0
            );
        }
    };

    return (
        <div className="galery-container">
            <div className="galery-title">
                <h4>Görseller</h4>
            </div>
            <div className="slider-container">
                <div className="slider">
                    {homePageImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="slider-item-container"
                            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                        >
                            <div className="slider-item">
                                <div className="img-item-container">
                                    <img
                                        src={image.img}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <img
                    src={arrowRight}
                    alt="Left arrow"
                    className="left-arrow"
                    onClick={() => handleSlideChange("left")}
                    aria-label="Previous slide"
                />
                <img
                    src={arrowRight}
                    alt="Right arrow"
                    className="right-arrow"
                    onClick={() => handleSlideChange("right")}
                    aria-label="Next slide"
                />
            </div>
        </div>
    )
}

export default Gallery