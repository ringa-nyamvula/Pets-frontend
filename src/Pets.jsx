import React, { useEffect, useState } from "react";

function Pets() {
  const [pets, setPets] = useState([]);
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    image_url: ""
  });
  const [editPetData, setEditPetData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:9292/pets/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => {
        setPets(prevPets => prevPets.filter(pet => pet.id !== id));
        alert("Record deleted!");
      })
      .catch((error) => {
        console.error("Error deleting pet:", error);
      });
  }

  function addPet(event) {
    event.preventDefault();
    const petData = {
      name: event.target[0].value,
      breed: event.target[1].value,
      image_url: event.target[2].value
    };

    fetch("http://localhost:9292/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petData)
    })
      .then((res) => res.json())
      .then((data) => {
        setPets(prevPets => [...prevPets, data]);
        alert("Pet added!");
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
      });

    event.target.reset();
  }

  function editPet(pet) {
    setEditPetData(pet);
  }

  