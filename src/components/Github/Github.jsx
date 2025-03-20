import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Mir-Haris')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    return ( 
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center">
            <p>Github followers: {data.followers}</p>
            
            {/* Profile Picture */}
            <img 
                src={data.avatar_url} 
                alt="Git profile" 
                className="w-32 h-32 rounded-full mt-4 border-4 border-white shadow-lg"
            />
        </div>
     );

}

export default Github;

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Mir-Haris')
   return response.json()
}