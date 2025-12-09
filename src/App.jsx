import { useState, useRef } from 'react'
import axios from "axios"
import { H1, Image, Paragraph, InputPedido, ButtonNew, Container, ContainerItens, Pedidos } from './sytled'
import Logo from './assets/burgerLogo.svg'
import Trash from './assets/trash.svg'
import { GlobalStyle } from './globalStyle'
import './App.css'

function App() {

 const [orders, setOrders] = useState([]);
  const inputName = useRef()
  const inputPedido = useRef()

  async function addNewOrder() {
const { data: newPedido } = await axios.post('http://localhost:3001/users', {
  name: inputName.current.value,
  pedido: inputPedido.current.value
})

setOrders([...orders, newPedido])
}

 async function deleteOrder(orderId){
      await axios.delete(`http://localhost:3001/users/${orderId}`)

    const newOrder = orders.filter(order => order.id !== orderId)
    setOrders(newOrder)
  }

  return (
    <>
      <Container>
        <GlobalStyle />
        <Image alt="logo-burguer" src={Logo} />
        <H1>Faça seu pedido!</H1>

        <ContainerItens>

          <Paragraph>Pedido</Paragraph>
          <InputPedido ref={inputPedido} placeholder="1 Coca-Cola, 1-X Salada" />

          <Paragraph>Nome do cliente</Paragraph>
          <InputPedido ref={inputName}  placeholder="Steve Jobs" />

          <ButtonNew onClick={addNewOrder}>Novo Pedido</ButtonNew>

          <ul>
            {orders.map(order =>
              <Pedidos key={order.id}>
                <p>{order.pedido} - {order.name}</p>
                <button onClick={() => deleteOrder(order.id)}><img alt="lixeira" src={Trash} /></button>
              </Pedidos>
            )}
          </ul>

        </ContainerItens>
      </Container>
    </>
  )
}

export default App
