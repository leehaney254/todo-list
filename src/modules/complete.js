const storeData = (storedTask) => {
  localStorage.setItem('todolists', JSON.stringify(storedTask));
};

const getData = () => {
  const bookShelfstr = localStorage.getItem('todolists');
  const bookArray = JSON.parse(bookShelfstr);
  if (bookArray === null) {
    const empty = [];
    return empty;
  }
  return bookArray;
};

const completeTask = () => {
  const checkElement = document.querySelectorAll('.check');
  const listText = document.querySelectorAll('.listmarg');
  const list = getData();
  checkElement.forEach((item, index) => {
    document.addEventListener('click', () => {
      if (item.checked === true) {
        listText.forEach((element, pos) => {
          if (index === pos) {
            element.classList.add('canceltext');
            list[index].completed = true;
            storeData(list);
          }
        });
      } else {
        listText.forEach((element, pos) => {
          if (index === pos) {
            element.classList.remove('canceltext');
            list[index].completed = false;
            storeData(list);
          }
        });
      }
    });
  });
};

export { storeData, getData, completeTask }