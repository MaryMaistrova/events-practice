const liName = document.querySelector('li[title]')

liName.addEventListener('click', () => {
  sortByName();
})

function sortByName() {
  let arrayAllUL = [];
  const allUl = document.querySelectorAll('ul');

  for (let i = 1; i < allUl.length; i++) {
    let current = allUl[i].querySelectorAll('li')[1].innerText;
    arrayAllUL.push(current);
  }

  let sortedAZ = arrayAllUL.toSorted((a, b) => a.localeCompare(b));
  let sortedZA = arrayAllUL.toSorted((a, b) => b.localeCompare(a))

  if (!liName.classList.contains('flowerpower')) {
    for (let ii = 0; ii < sortedAZ.length; ii++) {
      for (let i = 1; i < allUl.length; i++) {
        if (sortedAZ[ii] === allUl[i].querySelectorAll('li')[1].innerText) {
          let sortedTable = document.createElement('section');
          sortedTable.appendChild(allUl[i]);
          document.body.appendChild(sortedTable);
          liName.classList.add('flowerpower')
        }
      }
    } 
  } else {
    for (let ii = 0; ii < sortedZA.length; ii++) {
      for (let i = 1; i < allUl.length; i++) {
        if (sortedZA[ii] === allUl[i].querySelectorAll('li')[1].innerText) {
          let sortedTable = document.createElement('section');
          sortedTable.appendChild(allUl[i]);
          document.body.appendChild(sortedTable);
          liName.classList.remove('flowerpower')
        }
      }
    }
  }
}

