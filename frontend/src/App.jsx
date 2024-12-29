import './App.css'
import Form from './Form/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './Table/Table';
import Edit from './Edit/Edit';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
