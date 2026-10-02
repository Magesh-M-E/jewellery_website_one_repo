function PromoBanner() {
  return (
    <section className="bg-black px-6 py-20 text-center text-white">

      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Special Collection
      </p>

      <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
        Celebrate every beautiful moment.
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-gray-400">
        Discover our carefully curated collection of timeless jewellery.
      </p>

      <button className="mt-8 border border-white px-8 py-4 text-sm uppercase tracking-wider transition hover:bg-white hover:text-black">
        Explore Collection
      </button>

    </section>
  );
}

export default PromoBanner;
