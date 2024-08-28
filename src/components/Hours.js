import React from 'react';

const OpeningHours = () => {
  const getOpeningHours = () => {
    const now = new Date();

    const day = now.getDay();
    const hours = now.getHours();
    let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

    if (day >= 1 && day <= 5) { // Monday to Friday
      return diasSemana[day] +' 10 a.m. - 4 p.m.';
    } else { // Saturday and Sunday
      return diasSemana[day] +' 9 a.m. - 8 p.m.';
    }
  };

  return (
    <div  id="hours">
      <h2>Today's Hours</h2>
      <p>{getOpeningHours()}</p>
    </div>
  );
};

export default OpeningHours;