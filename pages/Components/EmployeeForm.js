import { useState } from 'react'

function EmployeeForm() {

    const [Empdata, setEmp] = useState([])
    const [empState, setEmpState] = useState({
        EmployeeName: '',
        EmployeeAddress: "",
        EmployeePhone: "",
        EmployeeEmail: '',
        id: ''
    })


    const fetchData = async () => {
        const response = await fetch('../api/comments/empdata')
        const data = await response.json()
        setEmp(data)
    }

    const submitData = async () => {
        console.log(empState)
        const response = await fetch('../api/comments/empdata', {
            method: 'POST',
            body: JSON.stringify({ empState }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json()
        fetchData(data)


    }

    const deleteRec = async (index) =>{
        const response = await fetch(`../api/comments/empdata/${index}`,{
            method: 'DELETE'
        }).then(response => response.json())
        fetchData(data)
    }

    const handleInputChange = e => {

        if (e.target.name === "EmployeeName") {
            setEmpState({ ...empState, EmployeeName: e.target.value })
        } else if (
            e.target.name === "EmployeeAddress"
        ) {
            setEmpState({ ...empState, EmployeeAddress: e.target.value })
        } else if (
            e.target.name === "EmployeePhone"
        ) {
            setEmpState({ ...empState, EmployeePhone: e.target.value })
        } else if (
            e.target.name === "EmployeeEmail"
        ) {
            setEmpState({ ...empState, EmployeeEmail: e.target.value })
        }
    }



    return (
        <>
            <div>
                <form >
                    
                    <label> Employee Name* </label>
                    <input name="EmployeeName" value={empState.EmployeeName} onChange={handleInputChange} />
                    <label> Employee Address</label>
                    <input name="EmployeeAddress" value={empState.EmployeeAddress} onChange={handleInputChange} />
                    <label> Employee Phone </label>
                    <input name="EmployeePhone" value={empState.EmployeePhone} onChange={handleInputChange} />
                    <label> Employee Email </label>
                    <input name="EmployeeEmail" value={empState.EmployeeEmail} onChange={handleInputChange} />
                    <button onClick={submitData} type="button">Submit </button>
                </form>

            </div>
            <div>
                <hr />
                <p>Employee List</p>
                <table border="1">
                    <thead>
                        <tr>
                            <th> Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Empdata.map((empState,index) => {
                                return <tr key={index}>
                                    <td>{index}</td>
                                    <td>{empState.EmployeeName}</td>
                                    <td>{empState.EmployeeAddress}</td>
                                    <td>{empState.EmployeePhone}</td>
                                    <td>{empState.EmployeeEmail}</td>
                                    <td>
                                        <button onClick={() => handleEdit(empState.id )}>Edit</button>
                                        <button onClick={() => deleteRec(index)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeForm;