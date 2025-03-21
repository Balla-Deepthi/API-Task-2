let loader=document.getElementById("loader")
const url = 'https://imdb-top-1000-movies-series.p.rapidapi.com/byrating';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '58c60aeccbmshea9b19b4ebebea6p12e717jsn052bbe387998',
		'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({
		above: '8.1',
		under: '8.2'
	})
};

async function getData()
{
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		displayData(result.result)
	} catch (err) {
		console.error(err);
	}
}
let container=document.createElement("div")
container.className="container"
async function displayData(movies)
{
	try
	{
       for(let obj of movies)
	   {
		let item=document.createElement("div")
		item.className="item"
		item.innerHTML=
		`
		<img src="${obj.Poster_Link}">
		<p><b>Series_Title:</b>${obj.Series_Title}</p>
		<p><b>Released_Year</b>:${obj.Released_Year}</p>
		<p><b>IMDB_Rating:</b>${obj.IMDB_Rating}</p>
		<p><b>Director:</b>${obj.Director}</p>
		`
		container.appendChild(item)
	   }
	   document.body.appendChild(container)
	   loader.remove()
	}
	catch (err) {
		console.error(err);
	}
}

getData()