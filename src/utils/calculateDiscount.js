// ✅ This function calculates discounted price based on original price and percentage

export function calculateDiscount(price, percentage) {
  // Check if inputs are invalid (like negative or non-number)
  if (typeof price !== "number" || typeof percentage !== "number") {
    throw new Error("Inputs must be numbers");
  }

  if (price < 0 || percentage < 0) {
    throw new Error("Inputs cannot be negative");
  }

  if (percentage > 100) {
    throw new Error("Discount cannot exceed 100%");
  }

  // Formula: discount = price * (percentage / 100)
  const discount = price * (percentage / 100);

  // Final price = original price - discount
  return price - discount;
}

// Example usage
export function calculateDiscountExample(price, discountPercent) {
  if (price == null || discountPercent == null) return 0;
  if (price < 0 || discountPercent < 0) return 0;
  return price - (price * discountPercent) / 100;
}
