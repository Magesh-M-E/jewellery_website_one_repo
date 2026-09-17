function Navbar() {
    return (
        <header className="border-b w-full bg-white">

          <div className="mx-auto flex max-w-7xl item-center justify-between px-6 py-5">
            
            <div>
              <h1 text-2xl font-serif font-bold tracking-wide>
                AURELIA
              </h1>
              <p className="text-xs tracking-[0.3em] text-gray-500">
                JEWELLERY
              </p>
            </div>

            <nav className="hidden md:flex item-center gap-8">
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
              <a href="#" className="hover:text-gray-500">
                 Jewellery
              </a>
              <a href="#" className="hover:text-gray-500">
                 Collections
              </a>
              <a href="#" className="hover:text-gray-500">
                 About
              </a>
              <a href="#" className="hover:text-gray-500">
                 Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button>⌕</button>
              <button>♡</button>
              <button>🛒</button>
            </div>

          </div>

        </header>
    )
}

export default Navbar;