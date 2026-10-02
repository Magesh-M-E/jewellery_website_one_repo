const products = [
  {
    name: "Classic Gold Ring",
    price: "₹24,999",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    name: "Pearl Necklace",
    price: "₹18,999",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  },
  {
    name: "Diamond Earrings",
    price: "₹32,999",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
  },
  {
    name: "Gold Bracelet",
    price: "₹21,999",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
  },
];

function FeaturedProducts() {
  return (
    <section className="bg-[#fafafa] px-6 py-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Our Selection
            </p>

            <h2 className="mt-2 font-serif text-4xl">
              Featured Jewellery
            </h2>
          </div>

          <button className="hidden border-b border-black pb-1 text-sm md:block">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">

              <div className="relative aspect-square overflow-hidden bg-white">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white">
                  ♡
                </button>

              </div>

              <div className="mt-4">
                <h3 className="font-medium">
                  {product.name}
                </h3>

                <p className="mt-1 text-gray-600">
                  {product.price}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;
