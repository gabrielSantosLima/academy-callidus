export const UserDetails = ({user}) => {
    const maiorDeIdade = user.idade >= 18
  return (
    <div className={"user" + (maiorDeIdade ? " apto" : "")}>
        <label className="username">{user.nome}</label>
        <label className="age">{user.idade}</label>
        <label className="job">{user.profissão}</label>
        <label className="status">{maiorDeIdade ? "Apto" : "Não apto"}</label>
    </div>
  )
}
