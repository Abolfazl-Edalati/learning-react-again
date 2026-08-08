import { useEffect, useState } from "react";

const UseEffect = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching product to " + category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <div className="m-2">
      <span>Product List</span>
    </div>
  );
};

export default UseEffect;
