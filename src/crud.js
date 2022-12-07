const unorderedList = document.querySelector('#unordered');
const list = [
  {
    index: 0,
    description: 'Double-tap to edit',
    completed: false,
  },
];

const deleteItem = () => {
  const deleteElement = document.querySelectorAll('.icondelete');
  deleteElement.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (element.innerHTML === '<i class="fa fa-trash-o point" aria-hidden="true"></i>') {
        console.log(element.innerHTML);
      } else {
        list.splice(index, 1);
        console.log(list);
        createList();
      }
    });
  });
}

const editElement = () => {
  const listElement = document.querySelectorAll('.listmarg');
  const deleteElement = document.querySelectorAll('.icondelete');
  listElement.forEach((element, index) => {
    element.addEventListener('click', () => {
      element.innerHTML = '';
      element.innerHTML += `
      <input type="text" class="edit border" placeholder="${list[index].description}">
      `;
      deleteElement.forEach((element, pos) => {
        if (index === pos) {
          element.innerHTML = '';
          element.innerHTML += `
          <i class="fa fa-trash-o point" aria-hidden="true"></i>
          `;
        }
        deleteItem();
      });
    });
  });
}

const completeTask = () => {
  const checkElement = document.querySelectorAll('.check');
  checkElement.forEach((item) => {

  });
}

const createList = () => {
  unorderedList.innerHTML = '';
  list.forEach((item) => {
    unorderedList.innerHTML += `
    <li class="lists"><span class="height">
    <input type="checkbox" class="point check">
    <span class="listmarg">${item.description}</span>
    </span>
    <span class="icondelete">
    <i aria-hidden="true" class="fa fa-ellipsis-v move"></i>
    </span>
    </li>
    `;
  });
  editElement();
};


const add = (input) => {
  const addObj = {};
  addObj.index = list.length;
  addObj.description = input;
  addObj.completed = false;
  list.push(addObj);
  unorderedList.innerHTML = '';
  createList();
}

export default add;
export { createList };