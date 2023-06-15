import imagen from "../../img/easter_egg.jpeg";
function easter_egg() {


  return (
    <div className="justify-content mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
     <img width="50%" src={imagen} alt="easteregg" />
    </div>
    
  );
}

export default easter_egg;