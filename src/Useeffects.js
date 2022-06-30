import React, { useState, useEffect } from "react";

export function Useeffect() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `siz marta ${count} bosdingiz`;
//     console.log(count);
//   }, []);

//   return (
//     <div>
//       <p>siz {count} marta bosdingiz</p>
//       <button onClick={() => setCount(count + 1)}>Click+</button>
//     </div>
//   );


// ==========================================================

const[info, setinfo] = useState("props");

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${info}`)
      .then((response) => response.json())
      .then((json) => console.json(json));
})

return(
    <div>
        <button onClick={() => setinfo("users")}>Users</button>
        <button onClick={() => setinfo("todos")}>Todos</button>
        <button onClick={() => setinfo("comments")}>Comments</button>
    </div>
);
}       
