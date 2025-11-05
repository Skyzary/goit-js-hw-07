const categoryItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsCount = item.querySelector('ul').children.length;

  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
