function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src="assets/images/illustration-empty-cart.svg" alt="empty cart" />
      <p className="text-sm font-medium text-rose-500">
        Your added items will appear here
      </p>
    </div>
  );
}

export default EmptyCart;
