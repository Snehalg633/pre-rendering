import { Empdata } from "../../data/Empdata";

export default function handler(req, res) {
 
  if (req.method === 'GET') {
    res.status(200).json(Empdata)
  } else if (req.method === 'POST') {
    const empState = req.body.empState
    const newEmpState = {
      EmployeeName: empState.EmployeeName,
      EmployeeAddress: empState.EmployeeAddress,
      EmployeePhone: empState.EmployeePhone,
      EmployeeEmail: empState.EmployeeEmail,
      id: '{index}'
    }
    Empdata.push(newEmpState)
    console.log(Empdata);
    res.status(201).json(newEmpState)
  }else if (req.method === 'DELETE') {
       
    const delState = Empdata.find(
        (empState) => index=== parseInt(empState)
    )

    const ind = Empdata.findIndex((empState) => index === parseInt(empState))
    Empdata.remove(ind)

    res.status(200).json(delState)
}
}

