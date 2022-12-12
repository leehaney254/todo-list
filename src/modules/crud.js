import { storeData, getData, completeTask } from './complete.js';

const unorderedList = document.querySelector('#unordered');

const storeEdit = () => {
  const events = document.querySelectorAll('.event');
  const count = document.querySelectorAll('.lists');
  const list = getData();
  let position;

  count.forEach((element, index) => {
    element.addEventListener('click', () => {
      position = index;
    });
  });

  events.forEach((element) => {
    element.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const edits = element.value;
        if (edits === '') {
          const par = element.parentNode.parentNode;
          par.innerHTML = '';
          par.innerHTML = `
          <input type="checkbox" class="point check">
          <span class="listmarg">${list[position].description}</span></span>
          <span class="icondelete"><i aria-hidden="true" class="fa fa-ellipsis-v move"></i>
          </span>`;
          // eslint-disable-next-line no-use-before-define
          editElement();
        } else {
          const obj = {};
          obj.index = position;
          obj.description = edits;
          obj.completed = false;
          list.splice(position, 1, obj);
          storeData(list);
          // eslint-disable-next-line no-use-before-define
          createList();
        }
      }
    });
  });
};

const editElement = () => {
  const listElement = document.querySelectorAll('.listmarg');
  const list = getData();
  listElement.forEach((element, index) => {
    element.addEventListener('click', () => {
      const parents = element.parentNode.parentNode;
      parents.innerHTML = '';
      parents.innerHTML = `
      <span class="del"><span class='heights'>
      <input type="checkbox" class="point check">
      <input type="text" class="edit event" placeholder="${list[index].description}">
      </span>
      <span class="icondelete"><i class="fa fa-trash-o point" aria-hidden="true" onclick='deleteItem()'></i>
      </span></span>
      `;
      storeEdit();
    });
  });
};

const createList = () => {
  const listMess = document.querySelector('#noth');
  unorderedList.innerHTML = '';
  const list = getData();
  if (list.length === 0) {
    listMess.innerHTML = '<p id="emptylist">You do not have any tasks</p>';
  } else {
    listMess.innerHTML = '';
    list.forEach((item) => {
      if (item.completed === true) {
        unorderedList.innerHTML += `
      <li class="lists"><span class="height">
      <input type="checkbox" class="point check" checked>
      <span class="listmarg canceltext">${item.description}</span></span>
      <span class="icondelete"><i aria-hidden="true" class="fa fa-ellipsis-v move"></i>
      </span>
      </li>
      `;
      } else {
        unorderedList.innerHTML += `
      <li class="lists"><span class="height">
      <input type="checkbox" class="point check">
      <span class="listmarg">${item.description}</span></span>
      <span class="icondelete"><i aria-hidden="true" class="fa fa-ellipsis-v move"></i>
      </span>
      </li>
      `;
      }
    });
  }
  editElement();
  completeTask();
};

const clearComplete = () => {
  const removeComplete = document.querySelector('#comp');
  removeComplete.addEventListener('click', () => {
    let list = getData();
    list = list.filter((element) => element.completed === false);
    list.forEach((item, index) => {
      item.index = index;
    });
    storeData(list);
    createList();
  });
};

const add = (input) => {
  const addObj = {};
  const list = getData();
  if (list.length === 0) {
    addObj.index = 0;
  } else {
    addObj.index = list.length;
  }
  addObj.description = input;
  addObj.completed = false;
  list.push(addObj);
  storeData(list);
  unorderedList.innerHTML = '';
  createList();
};

window.deleteItem = () => {
  const deleteElement = document.querySelectorAll('.icondelete');
  deleteElement.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (element.innerHTML === '<i class="fa fa-trash-o point" aria-hidden="true"></i>') {
        return;
      }
      const list = getData();
      list.splice(index, 1);
      list.forEach((item, index) => {
        item.index = index;
      });
      storeData(list);
      createList();
    });
  });
};

export default add;
export { createList, clearComplete };