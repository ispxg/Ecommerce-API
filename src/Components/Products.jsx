import { useState, useEffect } from "react";

const PRODUCTS_ENDPOINT =
  "https://api.escuelajs.co/api/v1/products?offset=0&limit=24";

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(PRODUCTS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-4 md:gap-0">
        {products?.map((product) => {
          return (
            <>
              <div className="p-4">
                <div className="mb-2 bg-slate-100 p-4 rounded-lg">
                  <img
                    className="object-cover object-center rounded-lg hover:cursor-pointer"
                    src={product.images}
                    alt={product.title}
                  />
                  <div>
                    <p
                      className="text-2xl md:text-sm text-gray-900 pt-2 pb-2"
                      key={product.id}
                    >
                      {product.title}
                    </p>
                    <div className="">
                      <p className="text-2xl md:text-lg text-gray-600">
                        Price: ${product.price}
                      </p>
                      <p className="text-2xl md:text-sm text-green-700 mt-2">
                        Free Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Products;
