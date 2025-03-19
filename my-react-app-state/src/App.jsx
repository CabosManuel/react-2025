import './App.css'
import Counter from '../components/Counter'
import ToggleButton from '../components/ToggleButton'
import NameForm from '../components/NameFrom'

function App() {
  return (
    <>
      <h1>Name Form</h1>
      <NameForm></NameForm>
      <ToggleButton/>
      <Counter/>
    </>
  )
}

export default App
