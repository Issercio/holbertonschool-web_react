import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className='App-body flex-1 text-justify border-t border-t-[2.5px] border-t-[var(--main-color)] px-2 md:px-4 py-2 md:py-4'>
      <p className='text-sm md:text-base mb-4'>Login to access the full dashboard</p>

      <div className='flex flex-col gap-4 md:gap-2 max-w-md'>
        <div className='flex flex-col gap-2'>
          <label className='text-sm md:text-base' htmlFor="email">Email :</label>
          <input className='w-full md:w-auto border border-gray-400 px-2 py-2 md:py-1 rounded text-sm md:text-base' type="email" name="email" id="email" />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-sm md:text-base' htmlFor="password">Password :</label>
          <input className='w-full md:w-auto border border-gray-400 px-2 py-2 md:py-1 rounded text-sm md:text-base' type="password" name="password" id="password" />
        </div>

        <button className='w-full md:w-auto border border-black px-4 py-2 md:px-2 md:py-1 cursor-pointer rounded text-sm md:text-base'>OK</button>
      </div>
    </div>
  )
}

const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
