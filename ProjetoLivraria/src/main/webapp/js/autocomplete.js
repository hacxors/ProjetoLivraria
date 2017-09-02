 $( function() {
					    var availableTags = [
					    	"LIVROS","BRANCA DE NEVE",
					    	"A BELA MOÇA",
					    	"O GUIA",
					    	"DR. OZZY", 
					    	"PEQUENO IRMÃO", 
					    	"FILMES",
					    	"DEADPOOL", 
					    	"GODZILLA", 
					    	"LAGOA AZUL", 
					    	"AMERICAN PIE", 
					    	"HANNIBAL", 
					    	"MUSICAS",
					    	"ZZ TOP",
					    	"BLACK SABBATH",
					    	"AC DC",
					    	"PRIMUS",
					    	"MOLEJO",
					    	"ACESSORIOS",
					    	"FONE",
					    	"CABO USB",
					    	"CARRREGADOR",
					    	"LED",
					    	"MOUSE",
					    	"GAMES",
					    	"MIRRORS EDGE",
					    	"FIFA",
					    	"BATTLEFIELD",
					    	"UNDERTALE",
					    	"SUPERHOT"
					    ];
					    $( "#titulo" ).autocomplete({
					      source: availableTags
					    });
					  } );