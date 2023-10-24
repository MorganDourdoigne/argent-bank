import React, { useEffect, useState } from 'react';

function Account({ title, amount, description }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjdlOTYyNTc1NzFmNDJmODdjYTA3NSIsImlhdCI6MTY5ODEzMzMxMSwiZXhwIjoxNjk4MjE5NzExfQ.1m-HEyZYSMcnNU4UcqQ6ycjO7g8K8ItWnI_XbNrR4q0'}`
        },
      });

      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setData(data.body); // Utilisez les données du corps de la réponse
    };

    fetchData();
  }, []);

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{data.title}</h3>
        <p className="account-amount">{data.amount}</p>
        <p className="account-amount-description">{data.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Account;
