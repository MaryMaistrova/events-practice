const liName = document.querySelector('li')

liName.addEventListener('click', () => {

})


  let arrayAllUL = []
  allUl = document.querySelectorAll('ul')

  for (let i = 1; i < allUl.length; i++) {
    let current = allUl[i].querySelectorAll('li')[1].innerText;
    arrayAllUL.push(current)
  }

  let sortedAZ = arrayAllUL.sort()

  for (let ii = 0; ii < sortedAZ.length; ii++) {
    for (let i = 1; i < allUl.length; i++) {
      if (sortedAZ[ii] === allUl[i].querySelectorAll('li')[1].innerText) {
        sortedTable = document.createElement('section')
        sortedTable.appendChild(allUl[i])
        document.body.appendChild(sortedTable)
      }
    }
  }


