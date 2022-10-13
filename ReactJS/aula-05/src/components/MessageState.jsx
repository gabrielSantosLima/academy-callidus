import React from 'react'

export const MessageState = ({setMessage}) => {
  const messages = ["Mensagem mudou pelo filho - 1", "Mensagem mudou pelo filho - 2", "Mensagem mudou pelo filho - 3" ]
  return (
    <>
      <button onClick={() => setMessage(messages[0])}>Mudar mensagem por filho 1</button>
      <button onClick={() => setMessage(messages[1])}>Mudar mensagem por filho 2</button>
      <button onClick={() => setMessage(messages[2])}>Mudar mensagem por filho 3</button>
    </>
  )
}
