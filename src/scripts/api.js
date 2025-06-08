// api.js
const API_URL = "https://mocki.io/v1/644ce2c2-3bf1-4b2f-b2cd-07b9dd902273";

export async function obtenerAlojamientos() {
  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al obtener los datos");
    const datos = await respuesta.json();
    return datos.data || datos;
  } catch (error) {
    console.error("Error al obtener alojamientos:", error);
    return [];
  }
}
