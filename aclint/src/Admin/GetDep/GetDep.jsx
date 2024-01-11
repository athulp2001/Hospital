import React, { useEffect, useState } from 'react'
import './GetDep.css'
import NavHead from '../NavHead'
import axios from 'axios';

const GetDep = () => {
    const [isUpdateDivVisible, setUpdateDivVisible] = useState(false);

    var handleHideButtonClick = () => {
      setUpdateDivVisible(!isUpdateDivVisible);
    };
  const [users, setUsers] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: '',
    headName: '',
    epolyNumber: '',
    age: '',
    description: '',
    selectDepartment: '',
});


  useEffect(() => {
    axios.get('http://localhost:7001/getDepHead')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
}, []);

const deleteuser = (id, name) => {
    axios.delete(`http://localhost:7001/deleteDepHead/${id}`)
        .then(response => {
            console.log("deleted successfully");
            axios.get('http://localhost:7001/getDepHead')
                .then(response => setUsers(response.data))
                .catch(error => console.log(error));
        })
        .catch(error => {
            console.error(error);
        });
};

const updateUser = async () => {
    try {
        const formData = new FormData();
        formData.append('headName', updateData.headName);
        formData.append('epolyNumber', updateData.epolyNumber);
        formData.append('age', updateData.age);
        formData.append('description', updateData.description);
        formData.append('selectDepartment', updateData.selectDepartment);
        formData.append('image', updateData.imageFile);

        const response = await axios.put(`http://localhost:7001/updateDepHead/${updateData.id}`, formData);
        console.log("Updated successfully", response.data);

        axios.get('http://localhost:7001/getDepHead')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));

            setUpdateData({
                id: '',
                headName: '',
                epolyNumber: '',
                age: '',
                description: '',
                selectDepartment: '',
                imageFile: null,
               });
        
    } catch (error) {
        console.error(error);
    }
};





  return (
    <div>
        <NavHead></NavHead>
        <div className='updateMainDiv'>
            <div className={isUpdateDivVisible ? 'UpdateDiv' : 'UpdateDiv hidden'} >
            <label className='labelName' htmlFor="">Department Head Name</label><br />
                <input
                  className="inpBoxx"
                    type="text"
                    placeholder="Name"
                    value={updateData.headName}
                    onChange={(e) => setUpdateData({ ...updateData, headName: e.target.value })}
                /><br />
                 <label className='labelName' htmlFor="">Employee Number</label><br />
                <input
                  className="inpBoxx"
                    type="text"
                    placeholder="epolyNumber"
                    value={updateData.epolyNumber}
                    onChange={(e) => setUpdateData({ ...updateData, epolyNumber: e.target.value })}
                /><br />
                 <label className='labelName' htmlFor="">Age</label><br />
                <input
                  className="inpBoxx"
                    type="text"
                    placeholder="age"
                    value={updateData.age}
                    onChange={(e) => setUpdateData({ ...updateData, age: e.target.value })}
                /><br />
                 <label className='labelName' htmlFor="">Description</label><br />

                <input
                  className="inpBoxx"
                    type="text"
                    placeholder="Description"
                    value={updateData.description}
                    onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
                /><br />
                 <label className='labelName' htmlFor="">Deparyment</label><br />
                <input
                  className="inpBoxx"
                    type="text"
                    placeholder="selectDepartment"
                    value={updateData.selectDepartment}
                    onChange={(e) => setUpdateData({ ...updateData, selectDepartment: e.target.value })}
                /><br />
               
                 <label className='labelName' htmlFor="">Image</label><br />
                <input
                    type="file"
                    onChange={(e) => setUpdateData({ ...updateData, imageFile: e.target.files[0] })}
                /><br></br>
                <button className='btnSave' onClick={updateUser}>Save</button>
            
                <button className='closeBtn' onClick={handleHideButtonClick}>close</button>
            </div>
            </div>
      <h1>Department Heads</h1>
      <table>
                <tr>
                    <th>Department Head Name</th>
                    <th>Employee Number</th>
                    <th>Age:</th>
                    <th>Description</th>
                    <th>Department</th>
                    <th>Profile Image</th>
                    <th>delete</th>
                    <th>update</th>
                </tr>
                {
                    users.map((i) => {
                        return (
                            <tr>
                                <td>{i.headName}</td>
                                <td>{i.epolyNumber}</td>
                                <td>{i.age}</td>
                                <td>{i.description}</td>
                                <td>{i.selectDepartment}</td>
                                <td>
                                    <img className='imgDep' src={require(`../DepartmentHeads/DepHeadImg/${i.image}`)} alt="" />
                                </td>
                                <td><button className='deleteBtn' onClick={() => deleteuser(i._id, i.headName)}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                                </button></td>
                                <td>
                                    <button className='updatemain' onClick={handleHideButtonClick}>
                                <button
                                        className='updateinner'
                                        onClick={() => setUpdateData({
                                            id: i._id,
                                            headName: i.headName,
                                            epolyNumber: i.epolyNumber,
                                            age: i.age,
                                            description: i.description,
                                            selectDepartment: i.selectDepartment,
                                         })}
                                    >
                                         <svg className='svgUp' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                       <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </button>
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
            </table>
    </div>
  )
}

export default GetDep
