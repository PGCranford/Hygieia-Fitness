import HeaderImg from '../../images/header02.jpg'

const Header = () => {
    return (
        <section>
            <div className='header'>
                <div>
                    <div className='img'>
                        <img src={HeaderImg} alt='' />
                    </div>
                    <div className='overlay'></div>
                </div>
                <div className='content'>
                    <h6>Build Your Fitness World <br /> By Building Your Body</h6>
                    <button className='btn'>Join Now</button>
                </div>
            </div>
        </section>
    )
}
export default Header 