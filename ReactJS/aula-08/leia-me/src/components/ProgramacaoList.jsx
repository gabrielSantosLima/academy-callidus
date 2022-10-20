import { Books } from "./Books"
import { Rodape } from "./Rodape"
import { Topo } from "./Topo"

export const ProgramacaoList = () => {
  return (
    <>
      <Topo />
      <main className="principal">
        <Books filterBy="programacao"/>
      </main>
      <Rodape />
    </>
  )
}
