export function updateVivienda(id, newData) {
  console.log(newData);
  return fetch(`http://localhost:8080/api/propiedades/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      // Authorization:
      //   "$2a$10$CUmlJIgLnUP6w80BcA7hYOhKD.ZoaNYBxNWfzbk0Q9T8aV9p7my9.",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Puedes retornar una confirmación u otra respuesta si lo deseas
      return response;
    })
    .then(() => {
      console.log("Propiedad actualizada");
      // Realiza cualquier acción adicional después de actualizar la propiedad
    })
    .catch((error) => {
      console.error("Error al actualizar la propiedad:", error);
      // Maneja el error de acuerdo a tus necesidades
    });
}
