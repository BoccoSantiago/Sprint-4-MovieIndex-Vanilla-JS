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
  function moviesAverage(array){
  let totalMovies = array.map(movies => movies);
  let avg = totalMovies.reduce((acc, movies) => acc + movies.score, 0) / totalMovies.length
  return parseFloat(avg);
} 


function moviesAverageOfDirector(array, director) {
  let totalMovies = getMoviesFromDirector(array, director);
  let sum = moviesAverage(totalMovies)
  //console.log(sum)
  return sum;
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
  //console.log(sort)
    return sort
}

// Exercise 6: Calculate the average of the movies in a category
 function moviesAverageByCategory(array, genre) {
  let category = array.filter(movies => (movies.genre).includes(genre) && movies.score !== '')
  let average = moviesAverage(category)
  //console.log(average)
  return average
  }


// Exercise 7: Modify the duration of movies to minutes
// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {
  let result = [...array].map((movies) => {
    let movieDuration = movies.duration;
    let indexHours = movieDuration.indexOf('h');
    //console.log('indexHours: ', indexHours);
    let indexMinutes = movieDuration.indexOf('min');
    //console.log('indexMinutes: ', indexMinutes);
    let hours = parseInt(movieDuration.slice(0, indexHours).trim());
    //console.log('hours: ', hours);
    let minutes = 0;
    if (indexMinutes !== -1) {
      minutes = parseInt(
        movieDuration.slice(indexHours + 1, indexMinutes).trim()
      );
    }

    let totalTime = hours * 60 + minutes;
    //console.log('total:', totalTime);
    return { ...movies, duration: totalTime };
  });
  console.log(result);
  return result;
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
