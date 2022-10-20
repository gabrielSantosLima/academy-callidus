import { Books } from "./Books"
import { Rodape } from "./Rodape"
import { Topo } from "./Topo"

export const Principal = () => {
  return (
    <>
      <Topo />
      <main className="principal">
        <Books />
      </main>
      <Rodape />
    </>
  )
}
