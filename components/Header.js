const Header = ({ search, setSearch, cart, setActiveCart }) => {
  return (
    <nav class="navbar bg-body-tertiary px-3">
      <a class="navbar-brand fw-bold">E-commerce</a>
      <form class="d-flex mx-auto" role="search">
        <input
          class="form-control me-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <button
        onClick={() => setActiveCart(true)}
        type="button"
        class="btn btn-outline-success flex gap-3"
      >
        Cart
        <span class="badge ms-2 rounded-pill text-bg-success">
          {cart.length}
        </span>
      </button>
    </nav>
  );
};

export default Header;
