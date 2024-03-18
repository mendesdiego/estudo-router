import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4 - Rota dinamica
  const { id } = useParams();

  // 5 - Carregamento de dado individual
  const url = 'http://localhost:3000/products/' + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <div>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregnado...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
        </div>
      )}
    </div>
  )
}

export default Product