let numeroPeliculas = 0;
let personasPelicula = 0;

class peliculaCartelera {
  constructor(id, nombre, precio, plataforma, cine) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.plataforma = plataforma;
    this.cine = cine;
  }
}

const peli1 = new peliculaCartelera("peli1", "batman", 32, "netflix", false);
const peli2 = new peliculaCartelera("peli2", "batman", 32, "netflix", false);
const peli3 = new peliculaCartelera("peli3", "batman", 32, "netflix", false);
const peli4 = new peliculaCartelera("peli4", "batman", 32, "netflix", false);
const peli5 = new peliculaCartelera("peli5", "batman", 32, "netflix", false);
const peli6 = new peliculaCartelera("peli6", "batman", 32, "netflix", false);
const peli7 = new peliculaCartelera("peli7", "batman", 32, "netflix", false);
const peli8 = new peliculaCartelera("peli8", "batman", 32, "netflix", false);
const cartelera = [peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8];

function guardarPelicula() {
  const textPeliculas = document.getElementById("PeliculasPorMes");
  numeroPeliculas = textPeliculas.value;
  const textPersonas = document.getElementById("PersonasPorPelicula");
  personasPelicula = textPersonas.value;

  if (numeroPeliculas > 8) {
    window.alert("por el momento solo tenemos 8 peliculas disponibles");
    numeroPeliculas = 0;
  }
}

function contarPeliculas() {
  const myMovies = document.getElementsByClassName("check");
  const myMoviesArray = Array.from(myMovies);
  const activatedMovies = myMoviesArray.filter(
    (movie) => movie.checked == true
  );

  if (activatedMovies.length > numeroPeliculas) {
    return false;
  } else {
    precioEnElCine(activatedMovies);
    return true;
  }
}

function precioEnElCine(_peliculas) {
  const selectedMovies = cartelera.filter((movie) =>
    _peliculas.includes(document.getElementById(movie.id))
  );
  const pricesMovies = selectedMovies.map((precio) => precio.precio);
  const totalPerPerson =
    _peliculas.length > 0 ? pricesMovies.reduce((a, b) => a + b) : 0;
  console.log(totalPerPerson);
}
