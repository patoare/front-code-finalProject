import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Trends = () => {
  const { token } = useContext(AuthContext); 
  const [treatments, setTreatments] = useState([]); 
  const [userId, setUserId] = useState(null); 

  // Obtener la información del usuario autenticado
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const user = await response.json();
        setUserId(user._id); // Guardar el ID del usuario
      } else {
        console.error("No se pudo verificar al usuario");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  // Obtener todos los tratamientos
  const fetchAllTreatments = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/treatments`);
      if (response.ok) {
        const treatmentsData = await response.json();
        setTreatments(treatmentsData);
      } else {
        console.error("Error al obtener tratamientos");
      }
    } catch (error) {
      console.error("Error fetching treatments:", error);
    }
  };

  useEffect(() => {
    fetchAllTreatments();
  }, []);

  // Manejar la eliminación de un tratamiento
  const handleDelete = async (currentTreatmentId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/treatments/${currentTreatmentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (response.status === 204) {
        fetchAllTreatments(); 
      } else {
        console.error("Error al eliminar el tratamiento");
      }
    } catch (error) {
      console.error("Error deleting treatment:", error);
    }
  };



  return (
    <>
      <h1 className="titlePage">TRENDS</h1>
      <ul className="cardsContainer">
        {treatments.map((currentTreatment) => (
          <li className="cardsOfTreatment" key={currentTreatment._id}>
            <p className="description">{currentTreatment.description}</p>
            <p>{currentTreatment.therapeuticTech}</p>
            <p>{currentTreatment.exercises}</p>
            <p> # {currentTreatment.hashtag}</p>

            

            {/* Mostrar el botón "Delete" solo si el usuario es el propietario */}
            {userId === currentTreatment.createdBy._id && (
              <button className="button" type="button" onClick={() => handleDelete(currentTreatment._id)}>
                Delete
              </button>
            )}
            <Link to={`/treatment/${currentTreatment._id}`}>
              <button className="button" type="button">View More</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Trends;

    