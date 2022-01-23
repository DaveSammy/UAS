$(document).ready(function() {
    //nama pada combo box
    $.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=151", function(pokemon) {
        let namaPokemon;
        let idboxNama;
        let bil = 1;
        let opt;
        let i = 0;
        for (i; i < 151; i++) {
            namaPokemon = pokemon.results[i].name;
            idWadahNama = document.getElementById("poke");
            opt = document.createElement("option");
            opt.id = bil;
            opt.text = namaPokemon;
            idWadahNama.add(opt);
            bil++
        }
        //background
        $("select").on("change", function() {
            let r = Math.floor((Math.random() * 100) + 100);
            let g = Math.floor((Math.random() * 100) + 100);
            let b = Math.floor((Math.random() * 100) + 100);
            document.getElementById("boxNama").style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", 0.5)";

            console.log($("#poke").val())
            $("#boxNama").html(" ");
            $("#boxGambar").html(" ");
            $("#boxTipe").html(" ");
            $("#boxNama").append($("#poke").val());

            //url
            let url = $(this).children(":selected").attr("id");
            let urlPokemon = "https://pokeapi.co/api/v2/pokemon/" + (url) + "/";

            $.getJSON(urlPokemon, function(urlPoke) {
                let gambarPokemon = urlPoke.sprites.front_default;
                let idboxGambar = document.getElementById("boxGambar");
                let img = document.createElement("img");
                img.setAttribute("src", gambarPokemon);
                idboxGambar.append(img);
                console.log(gambarPokemon);

                let arrayTipe = (urlPoke.types).length;
                for (let j = 0; j < arrayTipe; j++) {
                    let tipePokemon = urlPoke.types[j].type.name;
                    let tipe = document.getElementById("boxTipe");
                    let span1 = document.createElement("span");
                    let span01 = document.createElement("span");
                    let span2 = document.createElement("span");
                    //styling tipe pokemon
                    if (j == 0) {
                        //span 1 || hanya untuk satu tipe 
                        span1.id = "tipe1";
                        span1.innerHTML = urlPoke.types[0].type.name;
                        tipe.append(span1);
                        let idSpan1 = document.getElementById("tipe1");
                        let style1 = idSpan1.style;
                        style1.position = "absolute";
                        style1.top = "10%";
                        style1.left = "40%";
                        style1.fontSize = "5em";
                        style1.border = "2px solid black";
                        style1.width = "25%";
                        style1.textAlign = "center";
                    } else if (j > 0) {
                        //span 1 || untuk 2 tipe
                        document.getElementById("tipe1").remove()
                        span01.id = "tipe01";
                        span01.innerHTML = urlPoke.types[0].type.name;
                        tipe.append(span01);
                        let idSpan01 = document.getElementById("tipe01");
                        let style01 = idSpan01.style;
                        style01.position = "absolute";
                        style01.top = "10%";
                        style01.left = "20%";
                        style01.fontSize = "5em";
                        style01.border = "2px solid black";
                        style01.width = "25%";
                        style01.textAlign = "center";

                        //span 2
                        span2.id = "tipe2";
                        span2.innerHTML = urlPoke.types[1].type.name;
                        tipe.append(span2);
                        let idSpan2 = document.getElementById("tipe2");
                        let style2 = idSpan2.style;
                        style2.position = "absolute";
                        style2.top = "10%";
                        style2.left = "60%";
                        style2.fontSize = "5em";
                        style2.border = "2px solid black";
                        style2.width = "25%";
                        style2.textAlign = "center";
                    }
                    bil++
                    console.log(tipePokemon);
                }
            });
        })

    });
});