const features = [
  {
    title: "Premium Quality",
    description: "Beautifully crafted jewellery using carefully selected materials.",
  },
  {
    title: "Certified Jewellery",
    description: "Authenticity and quality you can trust.",
  },
  {
    title: "Secure Delivery",
    description: "Your jewellery is carefully packed and safely delivered.",
  },
  {
    title: "Easy Returns",
    description: "Shop with confidence with our simple return policy.",
  },
];

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="grid gap-10 md:grid-cols-4">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-xl">
              ✦
            </div>

            <h3 className="mt-5 font-serif text-xl">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;
