import HbSLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className='App-header flex items-center gap-2 sm:gap-4'>
      <img className='w-[15%]' src={HbSLogo} alt="holberton logo" />
      <h1 className='self-center text-[var(--main-color)] font-bold text-2xl sm:text-3xl md:text-4xl'>School dashboard</h1>
    </div>
  )
}

export default Header;
