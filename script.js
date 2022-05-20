// my database
var products = []
    //   get data
function getdatatag() {
    var data = {
        indexid: document.getElementById('index'),
        ProductName: document.getElementById('ProductName'),
        ProductCategory: document.getElementById('ProductCategory'),
        ProductPrice: document.getElementById('ProductPrice'),
        ProductDescription: document.getElementById('ProductDescription')
    }
    return data
}

function getdatainfo() {
    var getdata = {
        indexinfo: document.getElementById('index').value,
        nameinfo: document.getElementById('ProductName').value,
        Categoryinfo: document.getElementById('ProductCategory').value,
        Priceinfo: document.getElementById('ProductPrice').value,
        Descriptioninfo: document.getElementById('ProductDescription').value,
    }
    return getdata;
}


// ------------------------------------------clear function 
function clear() {

    // if i use following line >>> not work >>> need to understand why
    //getdatainfo().nameinfo = ""

    //if i use following line >>> will work >>> need to understand why
    //ProductName.value = ""
    //==============================================
    getdatatag().ProductName.value = ""
    getdatatag().ProductCategory.value = ""
    getdatatag().ProductPrice.value = ""
    getdatatag().ProductDescription.value = ""

}

function forclear() {
    clear()
}
// ------------------------------------------  create function   (1)
function createmodal() {
    clear()
        // btn
    document.getElementById('btnadd').style.display = ""
    document.getElementById('btnupdate').style.display = "none"
        // label
    AddLabel
    document.getElementById('AddLabel').style.display = ""
    document.getElementById('UpdateLabel').style.display = "none"
}



function create() {
    if (ProductName.value != "" && ProductCategory.value != "" && ProductPrice.value != "" && ProductDescription.value != "") {
        products.push(getdatainfo())
        clear()
        display()
    } else {
        // document.getElementById('btnadd').getAttribute()
    }


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
        <td>${products[index].Categoryinfo}</td>
        <td>${products[index].Priceinfo}</td>
        <td>${products[index].Descriptioninfo}</td>
        <td><button class="btn btn-outline-success w-100 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"onclick='getdatabyid(${index})'> <i class="fa fa-solid fa-edit "></i></button></td>
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
        <th scope="row " hidden>${index}</th>
        <td>${products[index].nameinfo}</td>
        <td>${products[index].categoryinfo}</td>
        <td>${products[index].priceinfo}</td>
        <td>${products[index].descriptioninfo}</td>
        <td><button class="btn btn-outline-success w-100 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"onclick='updateproduct(${index})'> <i class="fa fa-solid fa-edit "></i></button></td>
        <td><button class="btn btn-outline-danger w-100 " onclick='deleteproduct(${index})'> <i class="fa fa-solid fa-trash-can "></i></button></td>
        </tr>
        `
        }
        document.getElementById('tbl').innerHTML = tr
    }


}

// --------------   updateproduct
// get data by id 

function getdatabyid(id) {
    // btn
    document.getElementById('btnadd').style.display = "none"
    document.getElementById('btnupdate').style.display = ""

    // label AddLabel
    document.getElementById('AddLabel').style.display = "none"
    document.getElementById('UpdateLabel').style.display = ""


    getdatatag().indexid.value = id
    getdatatag().ProductName.value = products[id].nameinfo
    getdatatag().ProductCategory.value = products[id].Categoryinfo
    getdatatag().ProductPrice.value = products[id].Priceinfo
    getdatatag().ProductDescription.value = products[id].Descriptioninfo
}


function updateproduct() {
    var index = getdatainfo().indexinfo

    for (var i = 0; i < products.length; i++) {
        if (i == index) {
            document.getElementById('tbl').rows[i].cells[1].innerHTML = getdatainfo().nameinfo
            document.getElementById('tbl').rows[i].cells[2].innerHTML = getdatainfo().Categoryinfo
            document.getElementById('tbl').rows[i].cells[3].innerHTML = getdatainfo().Priceinfo
            document.getElementById('tbl').rows[i].cells[4].innerHTML = getdatainfo().Descriptioninfo
                // transfere data from old object to new object 
            products[i] = {...getdatainfo() }
            console.log(products[i]);

        }
    }
    clear()

}