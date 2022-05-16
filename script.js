var ProductName = document.getElementById('ProductName')
var ProductCategory = document.getElementById('ProductCategory')
var ProductPrice = document.getElementById('ProductPrice')
var ProductDescription = document.getElementById('ProductDescription')
    // my database
var products = []

// ------------------------------------------  create function   (1)
function createmodal() {
    // btn
    document.getElementById('btnadd').style.display = ""
    document.getElementById('btnupdate').style.display = "none"
        // label
    AddLabel
    document.getElementById('AddLabel').style.display = ""
    document.getElementById('UpdateLabel').style.display = "none"
}

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


function display() {
    var tr = ''
    for (let index = 0; index < products.length; index++) {

        tr += `
        <tr>
        <th scope="row " hidden>${index}</th>
        <td>${products[index].nameinfo}</td>
        <td>${products[index].categoryinfo}</td>
        <td>${products[index].priceinfo}</td>
        <td>${products[index].descriptioninfo}</td>
        <td><button class="btn btn-outline-success w-100 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"onclick='updateproduct()'> <i class="fa fa-solid fa-edit "></i></button></td>
        <td><button class="btn btn-outline-danger w-100 " onclick='deleteproduct(${index})'> <i class="fa fa-solid fa-trash-can "></i></button></td>
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



// -------------------------------------  function  delete  3

function deleteproduct(index) {

    products.splice(index, 1)
    console.log(products)
    display()
}


// -------------------------------------   function  search

function searchproduct() {
    var search = document.getElementById('Search')

    var tr = ''
    for (let index = 0; index < products.length; index++) {
        if (products[index].nameinfo.toLowerCase().includes(search.value.toLowerCase())) {

            tr += `
        <tr>
        <th scope="row ">${index}</th>
        <td>${products[index].nameinfo}</td>
        <td>${products[index].categoryinfo}</td>
        <td>${products[index].priceinfo}</td>
        <td>${products[index].descriptioninfo}</td>
        <td><button class="btn btn-outline-danger w-100 " onclick='deleteproduct(${index})'> <i class="fa fa-solid fa-trash-can "></i></button></td>
        </tr>
        `
        }
        document.getElementById('tbl').innerHTML = tr
    }

}

// --------------   updateproduct

function updateproduct() {
    // btn
    document.getElementById('btnadd').style.display = "none"
    document.getElementById('btnupdate').style.display = ""

    // label
    AddLabel
    document.getElementById('AddLabel').style.display = "none"
    document.getElementById('UpdateLabel').style.display = ""

}