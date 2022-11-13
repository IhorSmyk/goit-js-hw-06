const ulMain = document.querySelector('#categories');
console.log('Number of categories: ', ulMain.children.length);

for (let i = 0; i < ulMain.children.length; i++) {
  const res =
    'Category: ' +
    ulMain.children[i].firstElementChild.textContent +
    '\n' +
    'Elements: ' +
    ulMain.children[i].lastElementChild.children.length +
    '\n\n';
  console.log(res);
}
