const ProductCard = ({ product }) => {
    return (
      <div className="border p-4 rounded shadow">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600">Price: ${product.price}</p>
        <p className="text-gray-600">Stock: {product.stock}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    );
  };
  
  export default ProductCard;