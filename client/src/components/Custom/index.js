import custom01 from '../../images/custom01.jpg'
import custom02 from '../../images/custom02.jpg'
import custom03 from '../../images/custom03.jpg'

const Custom = () => {
    return (
        <section>
            <div className='custom container'>
                <div className='row'>

                    <div className='col-sm-4'>
                        <div className='box'>
                            <img src={custom01} className='img-fluid' alt='' />
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='box'>
                            <img src={custom02} className='img-fluid' alt='' />
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='box'>
                            <img src={custom03} className='img-fluid' alt='' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Custom