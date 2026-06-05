import HbSLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className='App-header flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4'>
      <img className='w-[20%] sm:w-[15%] md:w-[15%]' src={HbSLogo} alt="holberton logo" />
      <h1 className='self-center text-[var(--main-color)] font-bold text-lg sm:text-2xl md:text-4xl text-center sm:text-left'>School dashboard</h1>
    </div>
  )
}

export default Header;
