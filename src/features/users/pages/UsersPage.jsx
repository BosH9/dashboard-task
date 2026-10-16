import { useState } from "react";
import { users as initialUsers } from "../data/initialUsers";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);

  const [editingUser, setEditingUser] = useState(null);

  function handleDeleteUser(id) {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
  }
  //   function handleSubmitUser(){}

  function handleCreateUser(formData) {
    const newUser = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setUsers((currentUsers) => [...currentUsers, newUser]);
  }

  function handleUpdateUser(id, updates) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id ? { ...user, ...updates } : user,
      ),
    );
  }

  function handleEditUser(user) {
    // console.log(user);
    setEditingUser({ ...user });
  }

  function handleSubmitUser(formData) {
    if (editingUser) {
      handleUpdateUser(editingUser.id, formData);
      setEditingUser(null);
    } else {
      handleCreateUser(formData);
    }
  }

  return (
    <section>
      <h1>Users</h1>

      <UserForm
        key={editingUser?.id ?? "new"}
        editingUser={editingUser}
        onSubmit={handleSubmitUser}
        onCancel={() => setEditingUser(null)}
      />

      <UserList
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </section>
  );
}
