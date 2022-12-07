import './style.css';

const list = [
  {
    index: 1,
    description: 'Double-tap to edit',
    completed: false,
  },
  {
    index: 1,
    description: 'Drag \'n drop to render your list',
    completed: false,
  },
  {
    index: 1,
    description: 'Manage all your lists in one place',
    completed: false,
  },
  {
    index: 1,
    description: 'Resync to clear out the old',
    completed: false,
  },
];

const unorderedList = document.querySelector('#unordered');

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
};

createList();