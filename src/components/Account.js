// import React, { useEffect, useState } from 'react';

// function Account({ title, amount, description }) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://localhost:3001/api/v1/user/profile', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`An error has occurred: ${response.status}`);
//       }

//       const data = await response.json();
//       setData(data.body); 
//     };

//     fetchData();
//   }, []);

//    return (
//     <section className="account">
//       <div className="account-content-wrapper">
//         <h3 className="account-title">{data.title}</h3>
//         <p className="account-amount">{data.amount}</p>
//         <p className="account-amount-description">{data.description}</p>
//       </div>
//       <div className="account-content-wrapper cta">
//         <button className="transaction-button">View transactions</button>
//       </div>
//     </section>
//   );
// }

// export default Account;
