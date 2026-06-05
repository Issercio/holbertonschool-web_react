import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  const currentYear = getCurrentYear();
  const footerText = getFooterCopy(true);
  return (
    <div className='App-footer text-center italic border-t border-t-[2.5px] border-t-[var(--main-color)] mt-auto pb-4 md:pb-8 pt-2 md:pt-4 px-2 md:px-4'>
      <p className='text-xs md:text-sm'>Copyright {currentYear} - {footerText}</p>
    </div>
  )
}

export default Footer;
