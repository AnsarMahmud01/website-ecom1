import video from '../images/bike.mp4'
import './Slide.css';
import { BsFillPlayCircleFill } from 'react-icons/bs'

const Slider = () => {
    return (
        <div className="animated-block">
            <div className='darken'>
                <video className="background-video" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <h1 className="header-slide">Ең керемет велосипедтерді тек бізден таба аласыз</h1>
            <a className="play-button" href='https://www.youtube.com/watch?v=KkVG8nCbPvU'>
                <BsFillPlayCircleFill width="70px" />
            </a>
        </div>
    );
};

export default Slider;
