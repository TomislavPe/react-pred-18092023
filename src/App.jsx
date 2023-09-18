import './App.css'
import { useState } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

function App() {

  const initialUsers = [
    { name: 'Ivan', years: 30 },
    { name: 'Marko', years: 35 },
    { name: 'Ana', years: 25 },
  ]

  const [users, setUsers] = useState(initialUsers)

  const tekst = "Proizvoljan tekst"


  const uvecajGodine = () => {
    setUsers(prevState => {
      const updatedUsers = prevState.map(user => {
        return { ...user, years: user.years + 1 }
      })
      return updatedUsers
    })
  }

  const promijeniIme = (event) => {
   setUsers(prevState => {
      const newUser = {name:event.target.value, years:users[1].years}
      prevState[1] = newUser;
      const updatedUsers = prevState;
      return updatedUsers;
    })
  }

  return (
    <>
      <h1>State</h1>
      <UserClass name={users[0].name} years={users[0].years}/>
      <UserFunction name={users[1].name} years={users[1].years} promijeni={promijeniIme}/>
      <UserChildren name={users[2].name} years={users[2].years}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Uvecaj godine</button>
    </>
  )
}

export default App
