var ProductName = document.getElementById('ProductName')
var ProductCategory = document.getElementById('ProductCategory')
var ProductPrice = document.getElementById('ProductPrice')
var ProductDescription = document.getElementById('ProductDescription')

var products = []


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
}

function clear() {
    ProductName.value = ""
    ProductCategory.value = ""
    ProductPrice.value = ""
    ProductDescription.value = ""
}