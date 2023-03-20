class ProductManager {
  constructor(products = []) {
    this.products = products;
    this.nextId = 1;
  }

  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.error('All product fields are required');
      return;
    }

    const existingProduct = this.products.find(p => p.code === product.code);
    if (existingProduct) {
      console.error('A product with the same code already exists');
      return;
    }

    const newProduct = {
      ...product,
      id: this.nextId++
    };
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return product;
    } else {
      console.error('Product not found');
      return null;
    }
  }
}

// Importar la clase desde otro archivo o definirla en este mismo archivo
class ProductManager {
  // ...
}

// Crear una instancia de la clase
const productManager = new ProductManager();

// Agregar un producto
productManager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 10,
  thumbnail: '/path/to/thumbnail1.jpg',
  code: 'ABC123',
  stock: 5
});

// Obtener todos los productos
const products = productManager.getProducts();

// Buscar un producto por su ID
const productId = 1;
const product = productManager.getProductById(productId);
if (product) {
  console.log(product);
}