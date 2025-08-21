// import React from 'react'

// function Github() {
//     const [data, setData] =useState([])
//     useEffect(()=> {
//         fetch('https://api.github.com/users/HrutikSanjauPohekar')
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data);
//             setData(data)
//         })
//     },)
//   return (
//     <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xl'>
//       Github followers :{data.followers}
//       <img  className'text-center' src={data.avatar_url} alt="Git picture" width={300}/>
      
//       </div>
    
//   )
// }

// export default Github





// import React, { useState, useEffect } from 'react';

// function Github() {
//     const [data, setData] = useState({});

//     useEffect(() => {
        
//         fetch('https://api.github.com/users/HrutikSanjayPohekar')

//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 setData(data);
//             })
//              .catch(err => console.error(err));
//     }, []);

//     return (
//         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
//             Github followers: {data.followers}
//             <img className='mx-auto mt-4' src={data.avatar_url} alt="GitHub avatar" width={300} />
//         </div>
//     );
// }

// export default Github;





import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/HrutikSanjayPohekar')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err));
    }, []);

    if (!data) return <div className='text-center m-4 p-4'>Loading...</div>;

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img className='mx-auto mt-4' src={data.avatar_url} alt="GitHub avatar" width={300} />
        </div>
    );
}

export default Github;
// export const githubInfoLoader = async () =>{
//     fetch('https://api.github.com/users/HrutikSanjayPohekar')
}












// import React, { useState, useEffect } from 'react'

// function Github() {
//   const [data, setData] = useState({})

//   useEffect(() => {
//     fetch('https://api.github.com/users/HrutikSanjayPohekar')
//       .then(response => response.json())
//       .then(userData => {
//         console.log(userData)
//         setData(userData)
//       })
//   }, []) // ✅ dependency array रिकामी ठेव

//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
//       Github Followers : {data.followers}
//     </div>
//   )
// }

// export default Github



// import React, { useState, useEffect } from 'react'

// function Github() {
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     fetch('https://api.github.com/users/HrutikSanjayPohekar') // ✅ username correct
//       .then(response => response.json())
//       .then(userData => {
//         console.log(userData) // DevTools मध्ये पाहा
//         setData(userData)
//       })
//   }, [])

//   if (!data) {
//     return <h2 className="text-center mt-4">Loading...</h2>
//   }

//   return (
//     <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
//       Github Followers : {data.followers}
//     </div>
//   )
// }

// export default Github




// import React, { useEffect, useState } from 'react'

// function Github() {
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     fetch("https://api.github.com/users/hrutikpohekar")  // <-- इथे तुझं GitHub username दे
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json)
//       })
//   }, [])

//   return (
//     <div className="bg-gray-100 text-center p-6">
//       <h1 className="text-3xl font-bold mb-4">Github Page</h1>
//       {data ? (
//         <div>
//           <img
//             src={data.avatar_url}
//             alt="profile"
//             className="w-32 h-32 rounded-full mx-auto"
//           />
//           <h2 className="text-2xl mt-2">{data.name}</h2>
//           <p className="text-lg text-gray-600">@{data.login}</p>
//           <p className="text-lg">Followers: {data.followers}</p>
//           <p className="text-lg">Following: {data.following}</p>
//           <a
//             href={data.html_url}
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-600 underline"
//           >
//             Visit Profile
//           </a>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }

// export default Github



// import React, { useState, useEffect } from 'react';

// function Github() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch('https://api.github.com/users/HrutikSanjayPohekar')
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(err => console.error(err));
//     }, []);

//     if (!data) return <div className='text-center m-4 p-4'>Loading...</div>;

//     return (
//         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
//             Github followers: {data.followers}
//             <img className='mx-auto mt-4' src={data.avatar_url} alt="GitHub avatar" width={300} />
//         </div>
//     );
// }

// export default Github;



// import React, { useEffect, useState } from "react"

// function Github() {
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     fetch("https://api.github.com/users/HrutikSanjauPohekar")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//   }, [])

//   if (!data) return <div className="text-center p-4">Loading...</div>

//   return (
//     <div className="text-center m-4 bg-gray-600 text-white p-6 rounded-lg shadow-lg">
//       <img
//         src={data.avatar_url}
//         alt="profile"
//         className="w-32 h-32 rounded-full mx-auto mb-4"
//       />
//       <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
//       <p className="mb-2">@{data.login}</p>
//       <p className="mb-2">{data.bio}</p>
//       <p className="mb-2">Followers: {data.followers}</p>
//       <p className="mb-2">Following: {data.following}</p>
//       <a
//         href={data.html_url}
//         target="_blank"
//         rel="noreferrer"
//         className="text-blue-300 underline"
//       >
//         Visit Profile
//       </a>
//     </div>
//   )
// }

// export default Github
