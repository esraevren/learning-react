import { useReducer } from "react";
import Chat from "./Chat"
import ContactList from "./ContactList"
import { initialState, messengerReducer } from "./messengerReducer";


function App() {
  const [state,dispatch]=useReducer(messengerReducer,initialState)
  const message=state.messages[state.selectedId]
  const contact=contacts.find( (c) => c.id === state.selectedId)
  return (
    <>
      <ContactList  contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
      <Chat contact={contact} message={message} dispatch={dispatch}/>
  </>
  )
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

export default App
