import { SearchBox } from "react-instantsearch"

export function CatalogIntro() {
  return (
    <section className="catalog-intro" id="catalogo">
      <div>
        <p className="eyebrow">Librería</p>

        <h1>
          Catálogo
          <br />
          <em>Completo</em>
        </h1>

        <p className="catalog-intro__copy">
          Todos los libros disponibles en nuestra librería.
        </p>
      </div>

      <div className="search-area">
        <label htmlFor="catalog-search">
          Buscar en el catálogo
        </label>

        <div className="search-box">
          <SearchBox
            placeholder="Título, autor o editorial"
            className="catalog-search"
          />
        </div>

      </div>
    </section>
  )
}