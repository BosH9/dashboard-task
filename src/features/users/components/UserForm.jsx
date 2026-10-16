import { useState } from "react";

const emptyForm = {
  full_name: "",
  email: "",
  role: "User",
};

function getInitialForm(user) {
  console.log(user);
  return user
    ? {
        full_name: user.full_name,
        email: user.email,
        role: user.role ?? "User",
        active: user.active ?? true,
      }
    : emptyForm;
}

export default function UserForm({ onSubmit, editingUser, onCancel }) {
  const [formData, setFormData] = useState(() => getInitialForm(editingUser));

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(formData);
    setFormData(emptyForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">{editingUser ? "Update user" : "Add user"}</button>

      {editingUser && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
