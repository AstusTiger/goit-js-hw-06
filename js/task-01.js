const items = document.querySelectorAll('.item');
console.log('Number of categories : ', items.length)

for (const item of items) {
    console.log('')
    console.log('Category : ', item.querySelector('h2').textContent)
    console.log('Elements : ', item.querySelectorAll('li').length)
}
