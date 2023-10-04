import moment from 'moment/moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-12' src={logo} alt="" />
            <p className='text-lg text-[#706F6F] mt-3'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium mt-2'>
                {moment().format("dddd, MMMM D, YYYY")}
            </p>
        </div>
    );
};

export default Header;