import React, { useState } from "react";
import { Item } from "../types";

interface AddItemFormProps {
  onAdd: (item: Omit<Item, "id">) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

   
    onAdd({ userId: 0, title, body });

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md shadow mb-4">
      <input
        type="text"
        placeholder="Title"
        className="border rounded p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="border rounded p-2 w-full mb-2"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
