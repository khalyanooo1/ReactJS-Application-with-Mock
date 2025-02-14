import React, { useEffect, useState } from "react";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import axios from "axios";
import { Item } from "./types";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [nextUserId, setNextUserId] = useState<number>(11); // Start new user IDs from 11
  const [nextId, setNextId] = useState<number>(101); // Start IDs from 101

  //  Fetch items from API
  useEffect(() => {
    axios.get<Item[]>(API_URL).then((response) => {
      setItems(response.data);

      // Find the max userId and id from fetched items
      const maxUserId = Math.max(...response.data.map(item => item.userId), 10);
      const maxId = Math.max(...response.data.map(item => item.id), 100);

      setNextUserId(maxUserId + 1);
      setNextId(maxId + 1);
    });
  }, []);

  const handleAddItem = (newItem: Omit<Item, "id">) => {
    let userId = nextUserId;
    let id = nextId === 100 ? 101 : nextId; //  Ensure first ID is 101
  
    // Check if the title already exists
    const titleExists = items.some(item => item.title.toLowerCase() === newItem.title.toLowerCase());
    if (titleExists) {
      alert("This title already exists. Please choose a different name.");
      return;
    }
  
    //  Count items for the current userId
    const userItemsCount = items.filter(item => item.userId === userId).length;
  
    //  If a user already has 10 items, move to a new user
    if (userItemsCount >= 10) {
      userId = nextUserId + 1; // Assign new user ID
      setNextUserId(userId);
    }
  
    const itemWithId = { ...newItem, id, userId }; //  Assign correct userId & id
  
    setItems([...items, itemWithId]);
    setNextId(id + 1); //  Increment after setting (Fixes skipping 101)
  };
   

  //  Update an item by ID
  const handleUpdateItem = (id: number, updatedItem: Item) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  // Delete an item by ID
  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">ReactJS Application with Mock API and Deployment</h2>
      <AddItemForm onAdd={handleAddItem} />
      <ItemList items={items} onUpdate={handleUpdateItem} onDelete={handleDeleteItem} />
    </div>
  );
};

export default App;
