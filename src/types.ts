export interface Item {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  
  export interface ItemListProps {
    items: Item[];
    onUpdate: (id: number, updatedItem: Item) => void;
    onDelete: (id: number) => void;
  }
  export interface AddItemFormProps {
    onAdd: (item: Omit<Item, "id">) => void;    // Allows userId but removes id
  }
    