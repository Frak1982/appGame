



const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open("GET", "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc");
xhr.setRequestHeader("X-RapidAPI-Key", "b857128c91mshfa3d030e0d4356dp1ae6dfjsn7554a5545fe0");
xhr.setRequestHeader("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {

        let jsonString = xhr.responseText;
        let oggetto = JSON.parse(jsonString);

        for (i = 0; i < oggetto.length; i++) {

            let giochi = oggetto[i];
            let titoloGiochi = giochi.title;
            let immagineGiochi = giochi.thumbnail;
            let descriptionGiochi = giochi.short_description;
            let indirizzoGiochi = giochi.game_url;
                 
            var img = document.createElement("img");
            img.src = immagineGiochi;
            img.id = "fotoId";
            var src = document.getElementById("boxid");
            src.appendChild(img);

            var imgStar = document.createElement("img");
            imgStar.src = "./img/valutazione1.png";
            imgStar.id = "starId";
            var idStar = document.getElementById("boxid");
            idStar.appendChild(imgStar);

            var p = document.createElement("p");
            p.innerHTML = titoloGiochi + ":" + "<br>" + descriptionGiochi;
            var paragrafo = document.getElementById("boxid")
            paragrafo.appendChild(p);

            var a = document.createElement("a");
            a.href = indirizzoGiochi;
            a.innerText = "LINK"
            var link = document.getElementById("boxid");
            link.appendChild(a);

        }
    }   
    // } else {
    //     alert('Errore richiesta: ' + xhr.status); 
    // }
});

xhr.send(data);
