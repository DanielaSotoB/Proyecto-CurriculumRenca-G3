import React from 'react';

const DiplomasConDescarga = () => {
  const handleDownload = () => {
    // Asumiendo que tienes create-react-app y que el archivo está en la carpeta public
    const link = document.createElement('a');
    link.href = '/Certificado/CertificadoEjemplo.pdf';
    link.download = 'Diploma.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  };

  return (
    <div>
      <iframe
        src="/Certificado/CertificadoEjemplo.pdf"
        title="Diploma"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      />
      <button onClick={handleDownload} style={{ margin: '20px 0' }}>
        Descargar Diploma
      </button>
    </div>
  );
};

export default DiplomasConDescarga;
