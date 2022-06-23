import axios from 'axios';

//todos los paises
export function getApiTotal(payload) {
  return function (dispatch) {
    axios.get('/countries').then(res => {
      return dispatch({ type: 'GET_COUNTRIES', payload: res.data });
    });
  };
}

//paises por nombre
export function getCountriesName(name) {
  return dispatch => {
    axios
      .get(`/countries/?name=${name}`)
      .then(res => dispatch({ type: 'GET_COUNTRY_NAME', payload: res.data }));
  };
}

//postear actividad
export function postActivity(payload) {
  return async function () {
    try {
      const respuesta = await axios.post('/activity', payload);
      return respuesta;
    } catch (err) {
      console.log(err);
    }
  };
}

//todas las actividades
export function getActivities(payload) {
  return function (dispatch) {
    axios.get('/activity').then(res => {
      return dispatch({ type: 'GET_ALL_ACTIVITIES', payload: res.data });
    });
  };
}

//detalle del pais
export function getDetail(id) {
  return function (dispatch) {
    axios.get(`/countries/${id}`).then(res => {
      return dispatch({ type: 'GET_COUNTRY_DETAIL', payload: res.data });
    });
  };
}

//orden por alfabeto
export function ordenAsc(payload) {
  return { type: 'ORDER_BY_ASCENDENTE', payload: payload };
}

//orden por poblacion
export function ordenPoblacion(payload) {
  return { type: 'ORDER_BY_POBLACION', payload: payload };
}

//orden por continente
export function ordenContinente(payload) {
  return { type: 'ORDER_BY_CONTINENT', payload: payload };
}

//orden por actividades
export function ordenActividades(payload) {
  return { type: 'ORDEN_BY_ACTIVITY', payload: payload };
}

export function detailDelete(payload) {
  return { type: 'DELETE_STATE', payload: payload };
}
