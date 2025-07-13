import { Reorder } from "motion/react";
import React, { useState } from "react";

const initialItems = ["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍊 Orange"];

const App = () => {
  const [items, setItems] = useState(initialItems);
   const [draggingItem, setDraggingItem] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center text-green-500">
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="flex flex-col"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            onDragStart={()=>setDraggingItem(item)}
            onDragEnd={()=>{setDraggingItem(null)}}
             whileDrag={{
              border: "2px solid red",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              scale: 1.05,
              zIndex: 10,
            }}
            animate={draggingItem === item ? "dragging" : "rest"}
           variants={{
            rest: {
                border: "1px solid transparent",
                boxShadow: "none",
                scale: 1,
                zIndex: 0,
              },
              dragging: {
                // just syncing styles (not necessary if whileDrag is used)
              },
           }}
             transition={{ type: "spring", stiffness: 300, damping: 25 }}
            
         className="p-4 m-2 bg-green-200 shadow-md rounded-lg cursor-grab"
           
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default App;
