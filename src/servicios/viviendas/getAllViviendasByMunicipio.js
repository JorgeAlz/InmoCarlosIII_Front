export function getAllViviendasByMunicipio (municipio) {
    
    //Se recibirán datos con el fetch dependiendo de la página en la que nos encontremos. Esta página es dada por el hook useAllViviendas
    return fetch(`http://localhost:8080/api/propiedades?municipio=${municipio}`)
      .then(response => {
          const data = response.json();
          return data;
    })
}