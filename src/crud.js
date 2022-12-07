const unorderedList = document.querySelector('#unordered');
const list = [
  {
    index: 1,
    description: 'Double-tap to edit',
    completed: false,
  },
];

const createList = () => {
  list.forEach((item) => {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const arrange = document.createElement('i');
    const content = document.createElement('span');
    const checkContent = document.createElement('span');
    arrange.setAttribute('aria-hidden', 'true');
    checkBox.setAttribute('type', 'checkbox');
    arrange.classList.add('fa', 'fa-ellipsis-v');
    content.classList.add('listmarg');
    checkBox.classList.add('point', 'check');
    checkContent.classList.add('height');
    arrange.classList.add('move');
    listItem.classList.add('lists');
    const { description } = item;
    content.innerText = description;
    checkContent.appendChild(checkBox);
    checkContent.appendChild(content);
    listItem.appendChild(checkContent);
    listItem.appendChild(arrange);
    unorderedList.appendChild(listItem);
  });
  edit();
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

const edit = () => {
  const listElement = document.querySelectorAll('.listmarg');

  listElement.forEach((element, index) => {
    element.addEventListener('click', () => {
      const editField = document.createElement('input');
      editField.setAttribute('type', 'text');
      editField.classList.add('edit');
      const { description } = list[index];
      editField.value = description;
      element.innerHTML = '';
      element.appendChild(editField);
    })
  });
}

export default add;
export { createList };