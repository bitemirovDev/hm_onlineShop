let arr = [
    {
        src: 'https://u2.9111s.ru/uploads/202302/15/b88443e0ee988a4cf1c35b08033dc086.webp',
        title: 'IPhone 14', 
        description: 'IPhone 14 128Gb black', 
        price: '100 000тг',  
        isInStock: false
    },
    {
        src: 'https://cdna.lystit.com/photos/asos/ffbe44d7/asos-Black-Rose-Gold-Zipped-Compartment-Tote-Bag-With-Detachable-Strap.jpeg',
        title: 'Сумка', 
        description: 'Сумка black', 
        price: '10 000тг',  
        isInStock: true
    },
    {
        src: 'https://ae01.alicdn.com/kf/UTB86cqKziDEXKJk43Oqq6Az3XXag.jpg',
        title: 'Платье', 
        description: 'Платье black M', 
        price: '23 000тг',  
        isInStock: true
    },
    {
        src: 'http://ixbt.photo/photo/178228/21834B7tXJVlPOn/Kat3p3ufex/1226766.jpg',
        title: 'Часы', 
        description: 'Часы электронные', 
        price: '16 000тг',  
        isInStock: false
    },
    {
        src: 'https://life4health.ru/wp-content/uploads/2017/12/Krossovki-dlya-bega-po-asfaltu_006.jpeg',
        title: 'Кроссовки', 
        description: 'Кроссовки беговые', 
        price: '25 000тг',  
        isInStock: true
    }
]


let items = []

for(let item of arr){
    items.push(item)
}


function createCardImg (src){
    let cardImg = document.createElement('img')
    cardImg.src = src
    
    return cardImg
}

function createCardBody (t, d, p){
    let title = document.createElement('h2')
    let description = document.createElement('p')
    let price = document.createElement('p')
    let body = document.createElement('div')
    
    body.classList.add('card-body')
    title.classList.add('card-title')
    description.classList.add('card-text')
    price.classList.add('card-text')

    title.innerHTML = t
    description.innerHTML = d
    price.innerHTML = p

    body.append(title)
    body.append(description)
    body.append(price)
    
    return body
}

function isInStock (){
    let divButton = document.getElementById('divButton')
    let inStockButton = document.createElement('button')

    inStockButton.classList.add('btn-info', 'btn')
    divButton.append(inStockButton)
    inStockButton.innerHTML = 'Наличие'

    for(let i in items){

        inStockButton.addEventListener('click', function(){
            let inStock = document.createElement('p')
            inStock.classList.add('position')
            
            let boom = document.getElementById(`id_${i}`)
            inStock.innerHTML = 'В наличии'

            if(items[i].isInStock == true){
                boom.prepend(inStock)
            }
        })
    }
}

function createCard (){
    
    let main = document.querySelector('.main')
    let container
    let cardImg
    let cardBody
    let button

    for(let i in items){
        cardImg = createCardImg (items[i].src)
        cardBody = createCardBody (items[i].title, items[i].description, items[i].price)

        container = document.createElement('div')
        button = document.createElement('button')

        container.id = `id_${i}`

        container.classList.add('card')
        button.classList.add('btn', 'btn-danger')
        button.innerHTML = 'Delete'

        container.append(cardImg)
        container.append(cardBody)
        container.append(button)
        main.append(container)

        button.addEventListener('click', function(){
            if(confirm('Вы уверены?')){
                items.splice(i, 1) // работает некорректно, не могу понять почему..
                document.getElementById(`id_${i}`).remove()
                localStorage.setItem('store', JSON.stringify(items))
            }
        })
    }

    localStorage.setItem('store', JSON.stringify(items))

    isInStock ()
}

createCard ()
