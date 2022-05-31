// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movies => movies.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(movies => director === movies.director) 
 return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let totalMovies = getMoviesFromDirector(array, director);
  let sum = totalMovies.reduce((acc, movies) => acc + movies.score, 0)
  let avg = (sum/totalMovies.length).toFixed(2);
  //console.log(avg)
  return parseFloat(avg);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let title = array.map(movies => movies.title)
  let sort = title.sort()
  let firstTwenty = sort.slice(0, 20);
    return firstTwenty
} 

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let movies = array.map(movies => movies);
  let sort = movies.sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title)});
  //let sortAlpha = sortYear.sort((a, b) => a.title.localeCompare(b.title));
  console.log(sort)
  return sort
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
