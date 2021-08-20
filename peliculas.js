let personasPelicula = 1;
const textCostoPorPersona = document.getElementById("CostoPorPersona");
const textCostoPorPlataforma = document.getElementById("CostoPorPlataforma");


class plataformaPrecio {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const hboStream = new plataformaPrecio("hbo", 149);
const netflixStream = new plataformaPrecio("netflix", 266);
const amazonStream = new plataformaPrecio("amazon", 99);
const disneyStream = new plataformaPrecio("disney", 159);
class peliculaCartelera {
  constructor(id, nombre, precio, plataforma, cine,imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.plataforma = plataforma;
    this.cine = cine;
    this.imagen=imagen;
  }
}

const peli1 = new peliculaCartelera("peli1", "vivo", 32, netflixStream, false,"/Pelicula-o-Cine/img/vivo.jpg");
document.getElementById("img1").src=peli1.imagen;
const peli2 = new peliculaCartelera("peli2", "spiderman", 42, amazonStream, false,"/Pelicula-o-Cine/img/spider.jpg");
document.getElementById("img2").src=peli2.imagen;
const peli3 = new peliculaCartelera("peli3", "familia", 32, netflixStream, false,"/Pelicula-o-Cine/img/familia_mitchell.jpg");
document.getElementById("img3").src=peli3.imagen;
const peli4 = new peliculaCartelera("peli4", "readyPlayer", 32, hboStream, false,"/Pelicula-o-Cine/img/readyPlayer.jpg");
document.getElementById("img4").src=peli4.imagen;
const peli5 = new peliculaCartelera("peli5", "rango", 32, amazonStream, false,"/Pelicula-o-Cine/img/rango.jpg");
document.getElementById("img5").src=peli5.imagen;
const peli6 = new peliculaCartelera("peli6", "dragon", 52, netflixStream, false,"/Pelicula-o-Cine/img/dragon.jpg");
document.getElementById("img6").src=peli6.imagen;
const peli7 = new peliculaCartelera("peli7", "luca", 32, disneyStream, false,"/Pelicula-o-Cine/img/luca.jpg");
document.getElementById("img7").src=peli7.imagen;
const peli8 = new peliculaCartelera("peli8", "nextgen", 32, netflixStream, false,"/Pelicula-o-Cine/img/next_gen.jpg");
document.getElementById("img8").src=peli8.imagen;

const cartelera = [peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8];



function guardarPelicula() {

  const textPersonas = document.getElementById("PersonasPorPelicula");
  personasPelicula = textPersonas.value;


  if (personasPelicula == 0) {
    personasPelicula = 1;
    textPersonas.value = 1;
  }
  contarPeliculas();
}

function contarPeliculas() {
  const myMovies = document.getElementsByClassName("check");
  const myMoviesArray = Array.from(myMovies);
  const activatedMovies = myMoviesArray.filter(
    (movie) => movie.checked == true
  );

  if (activatedMovies.length >= 1) {
    precioEnElCine(activatedMovies);
  } else {
    document.getElementById("CostoPorPersona").innerText = '';
    document.getElementById("CostoPorPlataforma").innerText = '';
  }
}

function precioEnElCine(_peliculas) {
  const selectedMovies = cartelera.filter((movie) =>
    _peliculas.includes(document.getElementById(movie.id))
  );
  const pricesMovies = selectedMovies.map((precio) => precio.precio);
  const totalPerPerson = _peliculas.length > 0 ? pricesMovies.reduce((a, b) => a + b) : 0;

  const totalPorTodasLasPersonas = personasPelicula * totalPerPerson;

  textCostoPorPersona.innerText = `El costo por persona es $${totalPerPerson}
  El costo por ${personasPelicula} personas es $${totalPorTodasLasPersonas}`;

  precioPorPlataforma(selectedMovies);
}

function precioPorPlataforma(_peliculas) {
  const streamingPlatforms = [];
  _peliculas.map((pelicula) => {
    if (!streamingPlatforms.includes(pelicula.plataforma)) {
      streamingPlatforms.push(pelicula.plataforma);
    }
  });

  const pricePlatafoma = streamingPlatforms.map((precio) => precio.precio);
  const totalPlataforma = pricePlatafoma.reduce((a, b) => a + b);
  let textPlatform = "";
  const precioPorPersona = totalPlataforma / personasPelicula;
  streamingPlatforms.forEach(element => {
    textPlatform += `${element.nombre} por $${element.precio} al mes
    `

  });

  textCostoPorPlataforma.innerText = `para ver tus ${_peliculas.length} peliculas necesitas contratar:

  ${textPlatform}
  el total al mes es de: $${totalPlataforma}
  entre ${personasPelicula} personas
  cada persona pagaria: $${precioPorPersona}`;

}
