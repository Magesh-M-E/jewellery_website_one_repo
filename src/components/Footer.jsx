function Footer() {
  return (
    <footer className="bg-[#171717] px-6 py-12 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        <div>
          <h2 className="font-serif text-2xl">
            AURELIA
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Timeless jewellery designed to celebrate life's beautiful moments.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Shop</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <p>Rings</p>
            <p>Necklaces</p>
            <p>Earrings</p>
            <p>Bracelets</p>
          </div>
        </div>

        <div>
          <h3 className="font-medium">Information</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <p>About Us</p>
            <p>Contact</p>
            <p>Shipping</p>
            <p>Returns</p>
          </div>
        </div>

        <div>
          <h3 className="font-medium">Contact</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <p>Email: support@example.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2026 Aurelia Jewellery. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
