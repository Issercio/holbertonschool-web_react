import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className='App-body flex-1 text-justify border-t border-t-[2.5px] border-t-[var(--main-color)] px-2 md:px-4 py-2 md:py-4'>
      <p className='mb-4'>Login to access the full dashboard</p>

      <label htmlFor="email">Email :</label>
      <input className='border border-gray-400 px-1 rounded' type="email" name="email" id="email" />

      <label htmlFor="password">Password :</label>
      <input className='border border-gray-400 px-1 rounded' type="password" name="password" id="password" />

      <button className='border border-black px-2 cursor-pointer rounded'>OK</button>
    </div>
  )
}

const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
