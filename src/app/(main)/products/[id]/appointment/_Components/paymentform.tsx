import { formatCurrency } from "@/src/app/admin/lib/formatters";


export function PaymentForm({product}:CheckProductType) {
  const productPrice = formatCurrency(product.priceInCents / 100);
  const serviceFee = 10;
  const grandTotal = formatCurrency(product.priceInCents / 100 + serviceFee);

  return (
    <form className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6 ">
      <div className="text-xl font-semibold">
        <span className="text-gray-700">{product.name}</span>
        <span className="float-right text-gray-900">{productPrice}</span>
      </div>
      <div className="flex justify-between text-lg">
        <span className="text-gray-500">Sub Total:</span>
        <span className="text-gray-900">{productPrice}</span>
      </div>
      <div className="flex justify-between text-lg">
        <span className="text-gray-500">Service Fee:</span>
        <span className="text-gray-900">${serviceFee}</span>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between text-xl font-semibold">
        <span className="text-gray-700">Grand Total:</span>
        <span className="text-gray-900">{grandTotal}</span>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md font-bold hover:bg-blue-600 transition"
      >
        Proceed to Payment
      </button>
    </form>
  );
}
