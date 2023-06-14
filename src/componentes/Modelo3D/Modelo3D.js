import Menu from "../Menu/Menu";
import salon from "../../img/salon.jpg";
import salon2 from "../../img/salon2.jpg";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Modelo3D = () => {
  const iframeStyle = {
    display: 'block',
    margin: '20px auto',
    border: '0 none',
    maxWidth: '880px',
    borderRadius: '8px',
    boxShadow: '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)'
  };
  const iframeStyle2 = {
    display: 'block',
    margin: '20px auto',
    border: '0 none',
    maxWidth: '880px',
    borderRadius: '8px',
    boxShadow: '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)'
  };

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'rgba(255, 255, 255, 0.9)', // Cambiar el valor de 'rgba' para ajustar la transparencia
  borderRadius: '8px', // Añadir bordes redondeados
  boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)', // Cambiar la sombra según tus preferencias
  p: 4,
};

  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  return (
    <section>
      <Menu></Menu>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-3xl mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Modelos 3D
                </h2>
                <p className="mt-4 text-gray-500">
                  Lanzamos al mercado una gran idea que revolucionará el mundo de la vivienda gracias a nuestra tecnología. ¿Qué haces aquí todavía? Ve a verlo.
                </p>
              </header>
            </div>
          </div>
          <div className="lg:col-span-3 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="block group" onClick={handleOpenModal1}>
                  <img
                    src={salon}
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Piso en la montaña con vistas
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">180 m²</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="block group" onClick={handleOpenModal2}>
                  <img
                    src={salon2}
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Apartamento en la ciudad
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">150 m²</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <Modal
          open={openModal1}
          onClose={handleCloseModal1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe
              title="1"
              width="90%"
              height="500px"
              allowFullScreen={true}
              allow="accelerometer; magnetometer; gyroscope"
              style={iframeStyle}
              src="https://panoraven.com/es/embed/wP1G2qBvSX"
            ></iframe>
          </Box>
        </Modal>

        <Modal
          open={openModal2}
          onClose={handleCloseModal2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe
              title="2"
              width="90%"
              height="500px"
              allowFullScreen={true}
              allow="accelerometer; magnetometer; gyroscope"
              style={iframeStyle2}
              src="https://panoraven.com/es/embed/hG6p8BSXmv"
            ></iframe>
          </Box>
        </Modal>
      </div>
    </section>
  );
}

export default Modelo3D;

