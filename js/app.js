//console.log(data);
var selected_genre = document.getElementById("selected");
var music_class = document.getElementsByClassName("music");
var selected_data;
var audio_elements = [];
var selected_song;

// function to play music
function PlayAud(source){
	//console.log(source.firstChild.nextElementSibling);
	
	//console.log(audio_elements)

	for(var i = 0; i < audio_elements.length; i++){
		audio_elements[i].pause();
	}

	source.firstChild.nextElementSibling.play();
}

// click function to genre buttons
function genre(check) {
	var genre = check.innerHTML;
	selected_genre.innerHTML = "Genre: " + genre;

	selected_data = data.filter(function(data) {
		console.log(genre)
		return  data.genre == genre
	}); 
	appendItems(genre);
}

// creates img, text, button, or audio based off input
function create(type, value, what){
	var created = document.createElement(type);
	if (type == "img"){
		created.src = value;
		created.setAttribute("class", "music-img");
	} else if (type == "p"){
		created.innerHTML = value;
		if (what == "title"){
			created.setAttribute("class", "titled");			
		} else {
			created.setAttribute("class", "artist");
		}	
	} else if (type == "audio"){
		var srce = document.createElement(what)
		srce.src = value;
		created.appendChild(srce);
		audio_elements.push(created);
	}
	else {
		created.innerHTML = value;
		created.setAttribute("class", "play");
		created.setAttribute("onclick", "PlayAud(this.parentElement)")
	}
	return created;
}

// cycles through data to create elements
function appendItems(genre){
	for(var i = 0; i < music_class.length; i++){
		music_class[i].setAttribute("class", "music");
		//console.log(music_class[i])
	}

	audio_elements = []
	for (var i = 0; i < selected_data.length; i++)
	{
		music_class[i].innerHTML = " ";		
		music_class[i].appendChild(create("audio", selected_data[i].audio, "source"))
		music_class[i].appendChild(create("img", selected_data[i].image, "picture"));
		music_class[i].appendChild(create("p", selected_data[i].title, "title"));
		music_class[i].appendChild(create("p", selected_data[i].artist, "artist"));
		music_class[i].appendChild(create("button", "play", selected_data[i].audio));
	}
}

function random(){
	selected_song = data[Math.floor(Math.random() * data.length)];
	var selected_html;
	//console.log(selected_song);
	var genre = selected_song.genre;
	selected_genre.innerHTML = "Genre: " + genre;
	selected_data = data.filter(function(data) {
		//console.log(genre)
		return  data.genre == genre
	}); 
	appendItems(genre);

	for (var i = 0; i < selected_data.length; i++) {
		//console.log(selected_data[i])
		//console.log(selected_song)
		console.log(selected_data[i].title == selected_song.title)
		if (selected_data[i].title == selected_song.title){
			
			selected_html = music_class[i]
			console.log(selected_html)
			selected_html.setAttribute("class", "music highlight");
			setTimeout(function(){
				console.log(selected_html)
				selected_html.setAttribute("class", "music");
			}, 2000)
		}
		//console.log(music_class[i])
	}
	//console.log(selected_data)
}