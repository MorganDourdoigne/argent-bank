import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Account from "../components/Account";

function UserProfilePage() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState(user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }

      const data = await response.json();
      dispatch({ type: "USER_PROFILE_LOADED", payload: data.body });
      setData(data.body);
    };

    fetchData();
  }, [token, dispatch]);

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {data ? `${data.firstName} ${data.lastName}` : ""}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
                <h2 className="sr-only">Comptes</h2>
        {/* <Account />
          <Account />
        <Account /> */}
              </main>
    </div>
  );
}

export default UserProfilePage;
