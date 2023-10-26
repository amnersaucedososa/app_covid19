// helpers.js

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  
  export const calcularFechaSegundaDosis = (vacuna, fecha_primera_dosis) => {
    const primeraDosis = new Date(fecha_primera_dosis);
    let segundaDosis = new Date(primeraDosis);
  
    switch (vacuna) {
      case 'Sinopharm':
        segundaDosis.setDate(primeraDosis.getDate() + 28);
        break;
      case 'AstraZeneca':
        segundaDosis.setDate(primeraDosis.getDate() + 56);
        break;
      case 'Sputnik V':
        segundaDosis.setDate(primeraDosis.getDate() + 60);
        break;
      case 'Pfizer':
        segundaDosis.setDate(primeraDosis.getDate() + 21);
        break;
      case 'Moderna':
        segundaDosis.setDate(primeraDosis.getDate() + 28);
        break;
      case 'Janssen':
        segundaDosis = null;
        break;
      default:
        segundaDosis = null;
    }
  
    return segundaDosis;
  };
  
  export const getColorForEstado = (estado) => {
    switch (estado) {
      case 'Protegido':
        return 'green';
      case 'En Progreso':
        return 'orange';
      case 'En Riesgo':
        return 'red';
      default:
        return 'grey';
    }
  };
  