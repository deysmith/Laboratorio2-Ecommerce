import { Hits, Pagination } from "react-instantsearch"
import { ProductCard } from "./ProductCard"

export function CatalogResults() {
  return (
    <div className="results-area">
      <div className="results-toolbar">
        <p>Todos nuestros libros</p>
      </div>

      <div className="product-grid">
        <Hits hitComponent={ProductCard} />
      </div>

      <Pagination />
    </div>
  )
}