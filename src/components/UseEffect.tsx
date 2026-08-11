import { useEffect, useState } from "react";

const UseEffect = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching product to " + category);
    setProducts(["Clothing", "Household"]);

    return () => console.log("Disconnected");
  }, [category]);

  return (
    <div className="m-2">
      <span>Product List</span>
      <br />
    </div>
  );
};

export default UseEffect;
