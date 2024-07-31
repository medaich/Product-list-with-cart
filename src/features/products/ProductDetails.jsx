import { formatCurrency } from "../../utils/helpers";

function ProductDetails({ product }) {
  return (
    <p>
      <span className="text-rose-500">{product.category}</span>
      <br />
      <span className="font-semibold">{product.name}</span>
      <br />
      <span className="font-semibold text-custom-red">
        {formatCurrency(product.price)}
      </span>
    </p>
  );
}

export default ProductDetails;
