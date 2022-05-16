var ProductName = document.getElementById('ProductName')
var ProductCategory = document.getElementById('ProductCategory')
var ProductPrice = document.getElementById('ProductPrice')
var ProductDescription = document.getElementById('ProductDescription')
    // my database
var products = []

// ------------------------------------------  create function   (1)
function create() {
    var data = {
        nameinfo: ProductName.value,
        categoryinfo: ProductCategory.value,
        priceinfo: ProductPrice.value,
        descriptioninfo: ProductDescription.value
    }
    products.push(data)

    console.log(products)
    clear()
    display()
}
// ------------------------------------------clear function 
function clear() {
    ProductName.value = ""
    ProductCategory.value = ""
    ProductPrice.value = ""
    ProductDescription.value = ""
}

// ------------------------------------ display function   retrive  (2)

// display by using for 
var tr = ''

function display() {
    for (let index = 0; index < products.length; index++) {

        tr += `
        <tr>
        <th scope="row ">${index}</th>
        <td>${products[index].nameinfo}</td>
        <td>${products[index].categoryinfo}</td>
        <td>${products[index].priceinfo}</td>
        <td>${products[index].descriptioninfo}</td>
        <td><button class="btn btn-outline-success w-100 " "> <i class="fa fa-solid fa-edit "></i></button></td>
        <td><button class="btn btn-outline-danger w-100 "> <i class="fa fa-solid fa-trash-can "></i></button></td>
        </tr>
        `

    }
    document.getElementById('tbl').innerHTML = tr

}



// display  by using     last index  -============================================
// function display() {
//     var tr = ''
//     var lastindex = products.length - 1

//     tr += `
//             <tr>
//             <th scope="row ">${lastindex}</th>
//             <td>${products[lastindex].nameinfo}</td>
//             <td>${products[lastindex].categoryinfo}</td>
//             <td>${products[lastindex].priceinfo}</td>
//             <td>${products[lastindex].descriptioninfo}</td>
//             <td><button class="btn btn-outline-success w-100 " "> <i class="fa fa-solid fa-edit "></i></button></td>
//             <td><button class="btn btn-outline-danger w-100 "> <i class="fa fa-solid fa-trash-can "></i></button></td>
//             </tr>
//             `
//     document.getElementById('tbl').innerHTML += tr
// }