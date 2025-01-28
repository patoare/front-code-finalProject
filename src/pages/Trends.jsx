import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Trends = () => {
  const { token } = useContext(AuthContext); 
  const [treatments, setTreatments] = useState([]); 
  const [filteredTreatments, setFilteredTreatments] = useState([]); // Lista filtrada
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
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
        setFilteredTreatments(treatmentsData); 
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

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtrar tratamientos según el término de búsqueda (por hashtag)
    const filtered = treatments.filter((treatment) =>
      treatment.hashtag.toLowerCase().includes(term)
    );

    setFilteredTreatments(filtered);
  };


  return (
    <>
      <h1 className="titlePage">TRENDS</h1>
{/* Barra de búsqueda */}
<div className="search-bar">
        <input
          type="text"
          placeholder="Neck, Shoulder, Elbow, etc..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ul className="cardsContainer">
        {filteredTreatments.map((currentTreatment) => (
          <li className="cardsOfTreatment" key={currentTreatment._id}>
            <p className="description">{currentTreatment.description}</p>
            <p>{currentTreatment.therapeuticTech}</p>
            <p>{currentTreatment.exercises}</p>
            <p> # {currentTreatment.hashtag}</p>

            

            <div className="button-container">
            {userId === currentTreatment.createdBy._id && (
              <button className="button" type="button" onClick={() => handleDelete(currentTreatment._id)}>
                Delete
              </button>
            )}
            <Link to={`/treatment/${currentTreatment._id}`}>
              <button className="button" type="button">View More</button>
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Trends;

    