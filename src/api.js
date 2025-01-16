const API_URL = "https://jsonplaceholder.typicode.com/users";

//getUsers
export const getUsers = async () => {
  const response = await fetch(API_URL);

  return await response.json();
};

//deleteUser
export const deleteUser = async (id) => {
  const responser = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return await responser.json();
};

//updateUser, tiene una condicion si estoy editando o no un usuario, si no estoy editando es agregando
export const updateUser = async (user) => {
  const url = user.id ? `${API_URL}/${user.id}` : API_URL; //Si tiene id es la api/id, sino es la url de la api
  const method = user.id ? "PUT" : "POST"; //Si tiene id es un put, sino es un post

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
};