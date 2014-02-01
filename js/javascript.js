$(document).ready(function(){

	$('#btn-buscar').click(function(){

		$('#btn-buscar').hide();
		$('#resposta-cep, .menu-footer').show();

		var valor_cep = $('#cep').val();

		consultacep(valor_cep);

	});

	$('#nova-busca').click(function(){

		$('#resposta-cep, .menu-footer, #mapa-google').hide();
		$('#btn-buscar, #cep, #txt-dados-cep, .dados-cep').show();

		$('#cep').val('');

	});

	$('#como-chegar').click(function(){

		$('#txt-dados-cep, .dados-cep, #resposta-cep').hide();

		$('#mapa-como-chegar').show();

	});

	$('#google-maps').click(function(){

		$('#resposta-cep, #txt-dados-cep, #dados-cep, #cep').hide();
		$('#mapa-google').show();

	});

	$('#btn-como-chegar').click(function(){

		$('#dados-como-chegar').hide();
		$('#mapview').show();

	});

});

function consultacep(cep){

	cep = cep.replace(/\D/g,"")
	url="http://cep.correiocontrol.com.br/"+cep+".js"
	s=document.createElement('script')
	s.setAttribute('charset','utf-8')
	s.src=url
	document.querySelector('head').appendChild(s)

}

function correiocontrolcep(valor){

	if (valor.erro) {
		
		document.getElementById('logradouro').value="";
		document.getElementById('bairro').value="";
		document.getElementById('localidade').value="";
		document.getElementById('uf').value="";
		alert('Cep não encontrado');
		return;

	};

	document.getElementById('logradouro').value=valor.logradouro
	document.getElementById('bairro').value=valor.bairro
	document.getElementById('localidade').value=valor.localidade
	document.getElementById('uf').value=valor.uf

}


/* API Google Maps */
// inicializa jquery
 $(function(){
	// inicializa plugin gmap3	     
	$("#mapa").gmap3({
	    map:
		{
	      // local padrão onde o mapa irá aparecer quando carregado
		  address:"Mato Grosso do Sul, Brasil",
	      options:
		  {
			// zoom inicial (aproximação)  
	        zoom:6,
			// opções de controle do tipo do mapa (ruas, satélite, etc).
			// mapTypeControl como FALSE não mostra opções
	        mapTypeControl: true,
	        mapTypeControlOptions: 
			{
	          // define controles no formato dropdown
			  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
	        },
	        // permite navegar com o botão scroll do mouse
			scrollwheel: true,
			// mostra bonequinho para habilitar modo streetview
	        streetViewControl: true
	      }
		}  	
	}); 
});  


