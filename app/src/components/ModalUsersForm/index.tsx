import React, { useEffect, useState } from "react";
import userService from "services/userService";
import "./style.css";

const ModalUsersForm = () => {
  const [users, setUsers] = useState([]);

  const [values, setValues] = useState({
    id: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const getUsers = async () => {
    const response: any = await userService.getAllUsers();
    setUsers(response.data);
  };

  const deleteUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response: any = await userService.deleteUserById(values.id);
    if (response) {
      alert("Usuario apagado com sucesso");
    }
    console.log(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <section className="main-container">
        <section className="users-container container">
          {users.map((element: any) => (
            <div className="user-card" key={element.id}>
              <span className="card-title">User:</span>
              <span className="user-name-role-container">
                {element.userName}
                <span className="isAdmin-field">
                  {element.isAdmin == true ? "Admin" : ""}
                </span>
              </span>
              <span className="id-Field">
                ID: <span className="id">{element.id}</span>
              </span>
              <span className="email-Field">
                E-mail: <span className="id">{element.email}</span>
              </span>
            </div>
          ))}
        </section>
        <section className="users-manage-container container">
          <form className="edit-user-form" onSubmit={deleteUser}>
            <h2 className="edit-user-form-title">Deletar usuário</h2>
            <label className="edit-user-label">ID</label>
            <input
              name="id"
              type="text"
              required
              onChange={handleChange}
              className="edit-user-input id"
            />
            <div className="edit-user-form-buttons">
              <button className="delete-user-button user-button">
                Deletar
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default ModalUsersForm;
