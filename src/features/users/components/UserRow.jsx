export default function UserRow({ user, onEdit, onDelete }) {
  return (
    <li key={user.id} style={{ padding: "10px" }}>
      {user.full_name}
      <button onClick={() => onEdit(user)} type="button">
        Edit
      </button>
      <button onClick={() => onDelete(user.id)} type="button">
        Delete
      </button>
    </li>
  );
}
