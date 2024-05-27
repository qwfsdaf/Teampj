import React from 'react';
import Slider from 'react-slick';
import styles from './Slider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test1 from '../Pages/test1.png';
import test2 from '../Pages/test2.png';
import test3 from '../Pages/test3.png';
import test4 from '../Pages/test4.png';

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    return (
        <div className={styles.slidercontainer}>
            <Slider {...settings}>
                <div className={styles.myclosetdiv}>
                    <img className={styles.text} src={test1} alt='test1' />
                </div>
                <div className={styles.myclosetdiv}>
                    <img className={styles.text} src={test2} alt='test2' />
                </div>
                <div className={styles.myclosetdiv}>
                    <img className={styles.text} src={test3} alt='test3' />
                </div>
                <div className={styles.myclosetdiv}>
                    <img className={styles.text} src={test4} alt='test4' />
                </div>
                <div className={styles.myclosetdiv}>
                    <h3 className={styles.text}>5</h3>
                </div>
                <div className={styles.myclosetdiv}>
                    <h3 className={styles.text}>6</h3>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
