const movies = [
    “t=captain+america&y=2011”,
    “t=captain+marvel”,
    “t=iron+man”,
    “t=iron+man+2",
    “t=the+incredible+hulk”,
    “t=thor”,
    “t=the+avengers”,
    “t=iron+man+3",
    “t=Thor%3A+The+Dark+World”,
    “t=Captain+America%3A+The+Winter+Soldier”,
    “t=guardians+of+the+galaxy”,
    “t=guardians+of+the+galaxy+vol.+2",
    “t=Avengers%3A+Age+of+Ultron”,
    “t=Ant-Man”,
    “t=Captain+America%3A+Civil+War”,
    “t=Spider-man%3A+Homecoming”,
    “t=Doctor+Strange”,
    “t=Black+Panther”,
    “t=Thor+Ragnarok”,
    “t=Ant-man+and+the+wasp”,
    “t=Avengers+infinity+war”
 ];
 
 const getMovies2 = movies.map(movies => {
     fetch(“http://www.omdbapi.com/?apikey=” + apikey + “&” + movies)
         .then(res => res.json())
         .then(data => {
             let div = createNode(“div”);
             let img = createNode(“img”);
             let span = createNode(“span”);
             img.src = data.Poster;
             span.innerHTML = data.Title;
             appendNode(div, img);
             appendNode(div, span);
             appendNode(document.getElementById(“moviesDiv”), div);
             console.log(data.Title);
         })
  });
  
  const apikey = “d343d451”;