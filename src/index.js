import './style.css';
import add, { createList, clearComplete } from './crud.js';

window.addEventListener('load', createList());
// Add an event
const inputChange = document.querySelector('#input');
clearComplete();

inputChange.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (inputChange.value === '') {
      alert('Kindy dont add empty tasks');
    } else {
      add(inputChange.value);
      inputChange.value = '';
    }
  }
});
