import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu,setmenu] = useState([])
    const [loadar,setloadar]=useState(true)
     useEffect(()=>{
         fetch('http://localhost:5000/menu')
         .then(res=>res.json())
         .then(data=>{
             setmenu(data)
             setloadar(false)
         })
     },[])
     return[menu,loadar]
};

export default useMenu;