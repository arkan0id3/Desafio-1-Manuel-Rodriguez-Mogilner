let id = 0;

function createProduct(title, description, thumbnail, code, stock) {
    if (!title || !description || !thumbnail || !code || !stock) {
        throw new Error('Todas las propiedades son necesarias');
    }

    const prod = {
        id: ++id,
        title: title,
        description: description,
        thumbnail: thumbnail,
        code: code,
        stock: stock,    
    };
    
    return prod;
}

// Ejemplo de uso:
const myProd = createProduct('value1', 'value2', 'value3', 'value4', '22');
console.log(myProd); // { id: 1, title: 'value1', description: 'value2', thumbnail: 'value3', code: 'value4', stock: '22' }

const anotherProduct = createProduct('foo', 'bar', 'baz', 'qux', '27');
console.log(anotherProduct); // { id: 2, title: 'foo', description: 'bar', thumbnail: 'baz', code: 'qux', stock: '27' }

// Error porque no tiene todos los valores
createProduct('value1', 'value2', 'value3');