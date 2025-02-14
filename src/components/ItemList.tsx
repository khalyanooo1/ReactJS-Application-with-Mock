import React, { useState } from "react";
import { Item } from "../types";

interface ItemListProps {
  items: Item[];
  onUpdate: (id: number, updatedItem: Item) => void;
  onDelete: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onUpdate, onDelete }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"id" | "userId" | "title">("title");

  const handleEditClick = (item: Item) => {
    setEditId(item.id);
    setEditTitle(item.title);
    setEditBody(item.body);
  };

  const handleSave = () => {
    if (editId !== null) {
      onUpdate(editId, { id: editId, title: editTitle, body: editBody, userId: 1 });
      setEditId(null);
    }
  };

  // Filtering logic based on search query and type
  const filteredItems = items.filter((item) => {
    if (searchType === "id") return item.id.toString().includes(searchQuery);
    if (searchType === "userId") return item.userId.toString().includes(searchQuery);
    if (searchType === "title") return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return true;
  });

  return (
    <div>
      {/* Search & Filter Section */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Items List</h2>

        {/* Search Input */}
        <input
          type="text"
          className="border p-2 rounded mr-2"
          placeholder={`Search by ${searchType}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Search Filter Dropdown */}
        <select className="border p-2 rounded" value={searchType} onChange={(e) => setSearchType(e.target.value as any)}>
          <option value="id">Search by ID</option>
          <option value="userId">Search by User ID</option>
          <option value="title">Search by Title</option>
        </select>
      </div>

      {/* Render Filtered Items */}
      {filteredItems.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded-lg shadow">
          {editId === item.id ? (
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border rounded p-2 w-full mb-2"
              />
              <textarea
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="border rounded p-2 w-full mb-2"
              />
              <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded" onClick={handleSave}>
                Save
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setEditId(null)}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h3 className="font-bold">
                {item.title} <span className="text-gray-600">(User ID: {item.userId}, ID: {item.id})</span>
              </h3>
              <p>{item.body}</p>
              <button
                className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded"
                onClick={() => handleEditClick(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
