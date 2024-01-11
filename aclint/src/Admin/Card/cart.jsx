import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7001/getDepHead')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='maindiv'>
        {users.map((i) => (
        <div key={i.epolyNumber} className="card">
          <h1>{i.headName}</h1>
          <h1>{i.epolyNumber}</h1>
          <h1>{i.age}</h1>
          <p>{i.description}</p>
          <h1>{i.selectDepartment}</h1>
          <img className='imgDep' src={require(`../DepartmentHeads/DepHeadImg/${i.image}`)} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Card;
