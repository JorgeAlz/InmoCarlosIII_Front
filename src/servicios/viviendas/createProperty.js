export function createProperty(propiedadEnviada) {
  console.log(propiedadEnviada);

  return fetch("http://localhost:8080/api/propiedades", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(propiedadEnviada),
  })
    .then(function (response) {
      console.log(response);
      if (response.ok) {
        // Redireccionar a la ruta dashboard
        window.location.href = "/dashboard/propiedades";
      } else {
        throw new Error("Error al crear la propiedad");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
