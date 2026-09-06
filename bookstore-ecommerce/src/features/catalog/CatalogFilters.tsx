import { RefinementList, RangeInput } from "react-instantsearch"

export function CatalogFilters() {
  return (
    <aside
      className="filters"
      aria-label="Filtros del catálogo"
    >
      <div className="filters__heading">
        <h2>Explorar</h2>
      </div>

      <div className="filter-group">
        <h3>Categoría</h3>
        <RefinementList attribute="facets.category" />
      </div>

      <div className="filter-group">
        <h3>Editorial</h3>
        <RefinementList attribute="facets.publisher" />
      </div>

      <div className="filter-group">
        <h3>Lenguaje</h3>
        <RefinementList attribute="facets.language" />
      </div>

      <div className="filter-group">
        <h3>Precio</h3>
        <RangeInput attribute="pricing.price_crc" />
      </div>
    </aside>
  )
}