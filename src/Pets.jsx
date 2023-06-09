import React, { useEffect, useState } from "react";





function Pets() {
    const [pets,setPets] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/pets")
        .then(res => res.json())
        .then(data => setPets(data))
    },[])

    function handleDelete(id) {
        fetch(`http://localhost:9292/pets/${id}`,{
            method: "Delete"
            
        })
        .then(res => res.json())
        .then(data => {
            let rem = pets.filter(pet => pet.id !== id)
            setPets(rem)
        })
    }

    return (
        <>
         <ul>
            {pets.map(pet => (
                <div className="pet-card" key={pet.id}> 
                    <li>{pet.name}</li>
                    <img src={pet.image_url}   alt={pet.name}/>
                    <p>{pet.breed}</p>
                    <button onClick={() => handleDelete(pet.id)}>Delete</button>
                </div>
            ))}
         </ul>
         <h2>Add new pet</h2>
         <form>
            <input placeholder="name" />
            <input placeholder="breed" />
            <input placeholder="image_url" />
            <button>Add</button>
         </form>

        </>
    )
}

export default Pets