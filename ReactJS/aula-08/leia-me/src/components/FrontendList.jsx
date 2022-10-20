import { Books } from "./Books"
import { Rodape } from "./Rodape"
import { Topo } from "./Topo"

export const FrontendList = () => {
  return (
    <>
      <Topo />
      <main className="principal">
        <Books filterBy="frontend"/>
      </main>
      <Rodape />
    </>
  )
}
