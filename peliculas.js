let numeroPeliculas = 0;
let personasPelicula = 0;

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
  }
}
