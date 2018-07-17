//Selecciono los divs correspondientes a donde van a ir
const SPAIN = document.getElementById('spain'),
      MEXICO = document.getElementById('mexico');
      
//Creo una función que toma los datos de las horas y los repite en referencia con la hora UTC para que no haya errores ya que en México hay zonas donde cambian la hora 1 semana después
const getHours = () =>{
      HOUR = new Date(),
      H = HOUR.getUTCHours()+2,
      M = HOUR.getMinutes(),
      S = HOUR.getSeconds(),
      HM = HOUR.getUTCHours()-5;
      SPAIN.innerHTML = `ESPAÑA<br>${H} ${M} ${S}`;
      MEXICO.innerHTML = `MEXICO<br>${HM} ${M} ${S}`;};
      //Hago un intervalo para que se repita todo el proceso cada segundo
setInterval(getHours,1000);