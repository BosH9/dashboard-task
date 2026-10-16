import UserRow from "./UserRow";

export default function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}
