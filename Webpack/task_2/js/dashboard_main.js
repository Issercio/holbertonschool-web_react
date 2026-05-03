import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';

$('body').prepend('<div id="logo"></div>');
$('#logo').css({
  width: '200px',
  height: '200px',
  backgroundImage: `url(${logo})`,
  backgroundSize: '200px 200px',
  backgroundRepeat: 'no-repeat',
  margin: '0 auto',
});

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append('<span id="count"></span>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#start-btn').on('click', debounce(updateCounter, 500));
