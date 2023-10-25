import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdateUsername from "../components/UpdateUsernameForm";

function UserProfilePage() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  // met à jour l'état local lorsque le nom d'utilisateur dans le state Redux change
  useEffect(() => {
    setData(user);
  }, [user]);

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
            {data ? `${data.userName}` : ""} !
          </h1>
          <button
            className="edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Name"}
          </button>
        </div>
        {isEditing && <UpdateUsername setIsEditing={setIsEditing} />}
        <h2 className="sr-only">Comptes</h2>
        {/* {data.accounts.map((account) => (
          <Account key={account.id} account={account} />
        ))} */}
      </main>
    </div>
  );
}

export default UserProfilePage;
