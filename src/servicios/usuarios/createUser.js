import { useNavigate } from "react-router-dom";

export function createUser(usuarioEnviado) {
    
fetch("http://localhost:8080/api/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(usuarioEnviado),
})
  .then(function (response) {
    console.log(response);
    if (response.ok) {
      // Redireccionar a la ruta dashboard
      window.location.href = "/dashboard/usuarios";
    } else {
      throw new Error("Error al crear el usuario");
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}