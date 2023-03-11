import { ChangeEvent, useState } from 'react'
import { Idata } from './interfaces'



const App = (): JSX.Element => {
  const data: Idata[] = [
    {
      title: "Omar", id: 1,
    },
    {
      title: "Ertugrul", id: 2,
    },
    {
      title: "Usman Imperia", id: 3,
    }
  ]
  const [title, setTitle] = useState<string>("f")
  const [arr, setArr] = useState<Idata[]>(data)
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value)
  }
  console.log(title);



  const submit = (): void => {
    if (!title.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
    }
    setArr([...arr, newData])
    setTitle("")
  }
  const deleteItem = (id: number): void => {
    const newData = arr.filter(c => c.id != id)
    setArr(newData)
  }
  return (
    <>
      <div className='w-100  pt-4 d-flex justify-content-center align-items-center'>
        <div className='w-50 d-flex justify-content-center rounded flex-column p-3 align-items-center wrap'>
          <h1 className='text-center fw-bold py-2 w-50' style={{ color: "#ff0000" }}>App todo</h1>
          <div className='w-50'>
            <label htmlFor="user" className='w-100 my-3'>
              <input type="text" style={{ color: "#ff0000" }} id='user' className='form-control' value={title} onChange={changeHandler} placeholder='Text example' />
            </label>
            <button className='btn w-25' style={{ color: "#ff0000", background: "#2c2f36" }} onClick={submit}>Add Task</button>
            <div className='div d-flex flex-column mt-4 border shadow p-2 rounded align-items-start justify-content-between w-100'>
              {arr.map((c) => (
                <div key={c.id} style={{ background: "#fafafa" }} className='d-flex rounded w-100 border shadow my-2 py-2 px-2 justify-content-between align-items-center'>
                  <p className='title m-0 w-100' style={{ color: "#ff0000" }}>
                    {c.title}
                  </p>
                  <button className='btn btn-danger px-2 py-0 fw-small' onClick={() => deleteItem(c.id)}>Delete</button>
                  <button className='btn btn-dark mx-2 px-2 py-0 fw-small'>Edit</button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div></>)
}

export default App
