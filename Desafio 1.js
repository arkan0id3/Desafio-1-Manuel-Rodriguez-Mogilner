let id = 0;

function createProduct(title, description, thumbnail, code, stock) {
    if (!title || !description || !thumbnail || !code || !stock) {
        throw new Error('Todas las propiedades son necesarias');
    }

    const obj = {
        id: ++id,
        title: title,
        description: description,
        thumbnail: thumbnail,
        code: code,
        stock: stock,    
    };
    
    return obj;
}

// Ejemplo de uso:
const myObject = createProduct('value1', 'value2', 'value3', 'value4');
console.log(myObject); // { id: 1, prop1: 'value1', prop2: 'value2', prop3: 'value3', prop4: 'value4' }

const anotherProduct = createProduct('foo', 'bar', 'baz', 'qux');
console.log(anotherObject); // { id: 2, prop1: 'foo', prop2: 'bar', prop3: 'baz', prop4: 'qux' }

// Error porque no tiene todos los valores
createProduct('value1', 'value2', 'value3');