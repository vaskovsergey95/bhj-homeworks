
const book =document.querySelector('.book');
const font = document.querySelectorAll('.font-size')

font.forEach(item =>{
    item.addEventListener('click', () =>{
        font.forEach(el=>{ el.classList.remove('font-size_active'); });
        item.classList.add('font-size_active')

        if(item.classList.contains('font-size_big')){
            book.classList.add('book_fs-big')
        }
        if(item.classList.contains('font-size_small')){
            book.classList.add('book_fs-small')
        }
    })

})

