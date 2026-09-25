let products = ["Laptop","Phone","Headphones","Monitor"]


function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(newProduct){
    products.push(newProduct);
    return products;
}

function updateProductName(index,newName){
products[index] = newName;
return products;
}

function removeLastProduct(){
    products.pop();
    return products;
}
if(typeof module !== 'undefined') {
    module.exports = {products, logFirstProduct,addProduct,updateProductName,removeLastProduct};
}