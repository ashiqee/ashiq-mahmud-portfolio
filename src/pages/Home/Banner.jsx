import profileImg from '../../assets/images/ashiq.png'

const Banner = () => {
    return (
        <div className="h-screen">
            <h2>Ashik Mahmud</h2>
            <img className='rounded-full' src={profileImg} alt="" />

        </div>
    );
};

export default Banner;