import './style.css';
import add, { createList } from './crud.js';

createList();

// Add an event
const inputChange = document.querySelector('#input');

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
