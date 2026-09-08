function SearchBar() {
  return (
    <div className="flex-grow-1 d-flex justify-content-center mx-lg-4">
      <form
        className="search-pill"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="search-pill-field"
          placeholder="¿Dónde quieres vivir?"
          aria-label="Comuna o región"
        />
        <span className="search-pill-divider" aria-hidden="true"></span>
        <button type="submit" className="search-pill-btn" aria-label="Buscar">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default SearchBar