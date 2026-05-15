const getCurrentYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) =>
  isIndex
    ? 'Holberton School'
    : 'Holberton School main dashboard';

export { getCurrentYear, getFooterCopy };

export default {
  getCurrentYear,
  getFooterCopy,
};