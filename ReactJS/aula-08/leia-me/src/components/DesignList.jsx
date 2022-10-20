import { Books } from "./Books"
import { Rodape } from "./Rodape"
import { Topo } from "./Topo"

export const DesignList = () => {
  return (
    <>
      <Topo />
      <main className="principal">
        <Books filterBy="design"/>
      </main>
      <Rodape />
    </>
  )
}
