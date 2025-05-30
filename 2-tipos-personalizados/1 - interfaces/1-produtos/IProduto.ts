interface IProduct {
    id: string,
    name: string,
}

const listProducts:IProduct[] = []

function newProduct(product: IProduct): void{
    listProducts.push(product)
    console.log(listProducts)
}


newProduct({id:"fnowerifniofn", name:"teclado"})