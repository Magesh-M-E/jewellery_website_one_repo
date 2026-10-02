const categories = [
  {
    name: "Rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    name: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  },
  {
    name: "Earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
  },
  {
    name: "Bracelets",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
  },
];

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Explore
        </p>

        <h2 className="mt-2 font-serif text-4xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

        {categories.map((category) => (
          <div
            key={category.name}
            className="group cursor-pointer"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-4 text-center font-serif text-xl">
              {category.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;
