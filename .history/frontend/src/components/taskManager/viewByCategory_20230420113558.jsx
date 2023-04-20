// import React, { useState } from "react";

// const ViewByCategory = ({ tasks }) => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const categories = ["Work", "Personal", "Finance", "Others"];

//   const tasksByCategory = (category) => {
//     return tasks.filter((task) => task.category === category);
//   };

//   return (
//     <div>
//       <h2>View By Category</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category}>
//             <button
//               onClick={() => setSelectedCategory(category)}
//               className={selectedCategory === category ? "active" : ""}
//             >
//               {category}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         {selectedCategory && (
//           <div>
//             <h3>{selectedCategory}</h3>
//             <ul>
//               {tasksByCategory(selectedCategory).map((task, index) => (
//                 <li key={index}>
//                   <div>Title: {task.title}</div>
//                   <div>Description: {task.description}</div>
//                   <div>Status: {task.status}</div>
//                   <div>Due Date: {task.dueDate}</div>
//                   <div>Category: {task.category}</div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewByCategory;

import React from "react";
import { Link } from "react-router-dom";

const ViewByCategory = ({ tasks }) => {
  // get unique categories
  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <div>
      <h2>View Tasks By Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewByCategory;