import React, { useState } from 'react'

const TodoList = () => {
    const [data, setData] = useState("");
    const [list, setList] = useState([]);
    const [saveid, setSaveid] = useState(-1);
    const [condition, setCondition] = useState(false);
    const [saveData, setSaveData] = useState("")

    const addTodo = () => {
        if(data.length>0){
            setList([...list, data]);
           } 
        setData("");
       
    }

    const editTodo = (id) => {
        setSaveid(id);
        setCondition(true);
    }

    const delTodo = (id) => {
        const newList = list.filter((item, i) => {
            return i != id;
        })
        setList(newList);
    }

    const saveTodo = (id) => {
        if(saveData.length>0){

            const newList = [...list];
            newList[id] = saveData;
            setList(newList);
            setCondition(false);
            setSaveid(-1);
        }
       
    }
    return (
        <div>
            <input type="text" value={data} onInput={e => setData(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            {
                list.map((item, i) => {
                    return ((!condition) ?
                        <h3 key={i}>{item}
                            <button onClick={() => editTodo(i)}> Edit</button>
                            <button onClick={() => delTodo(i)}> Delete</button>
                        </h3>
                        :
                        (saveid !== i) ?
                            <><h3 key={i}>{item} <button onClick={() => editTodo(i)}> Edit</button>
                                <button onClick={() => delTodo(i)}> Delete</button></h3>  </>
                            :
                            <><input type="text" onInput={e => setSaveData(e.target.value)} />
                                <button onClick={() => saveTodo(i)}>Save</button></>
                    )

                })
            }
        </div>
    )
}

export default TodoList