import Product from "./Product";

function Products({ products }) {
  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold">Desserts</h1>
      <ul className="max-lg:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-10">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
