function Hero() {
  return (
    <section className="bg-[#f7efee]">
      <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">

        {/* Text */}
        <div className="px-6 py-16 md:px-12 md:py-24">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Timeless Elegance
          </p>

          <h1 className="max-w-xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
            Jewellery that tells your story.
          </h1>

          <p className="mt-6 max-w-lg text-gray-600">
            Discover beautifully crafted jewellery designed to celebrate
            your most precious moments.
          </p>

          <button className="mt-8 bg-black px-8 py-4 text-sm uppercase tracking-wider text-white transition hover:bg-gray-800">
            Shop Collection
          </button>

        </div>

        {/* Image */}
        <div className="h-[500px] bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
            alt="Jewellery collection"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;