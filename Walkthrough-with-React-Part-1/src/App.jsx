import Person from './components/Person'
import Button from './components/Button'
import Header from "./components/Header"
import List from './components/List'

function App() {
  return (
    <>
      <Person name="Ankur" age="23"></Person>
      <Button text='Click Me!' onClick={() => console.log("Button Clicked")} />
      <Header title = "Welcomee to my website" />
      <List items={['apple', 'banana', 'orange']} />
    </>
  )
}

export default App
