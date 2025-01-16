import { Button } from "./components/Button/Button"
import { Input } from "./components/Input/Input"
import { Label } from "./components/Label/Label"

function App() {
  

  return (
    <>
      <Button colorVariante="primary"/>
      <Button colorVariante="secondary"/>
      <Button colorVariante="danger"/>
      <Button colorVariante="primary"/> <br />
      <Label tipoLabel="primary" text="Nome"/>
      <Label tipoLabel="secondary" text="teste"/>
      <Label tipoLabel="danger" text="Cancelar"></Label>
      <Input />
    </>
  )
}

export default App
