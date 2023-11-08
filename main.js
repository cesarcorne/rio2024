"use strict";
var arrLang = {
	'English': {
		'course1': 'Course 1',
		'about': 'About RIO',
		'aboutDesc': 'The Rio Summer School of Informatics is  organized yearly by the Computer Science Department of the National University of Rio Cuarto. Traditionally, the school is a week-long event taking place during the Argentinean summer, in February. The original goal of the school was to provide the students of the computer science careers of the National University of Rio Cuarto with an ample and up-to-date  view of the discipline, as well as to promote  the contact and interaction between students, professors and researchers of computer science. To that end, the school was designed to provide short and intensive courses taught by prominent researchers and professors in computer science; the social events during the school provide an excellent opportunity to connect students and professors from different institutions. Since the first edition of the school in 1994, it has become a traditional event for the computer science community in Argentina, and the region. More than 3000 students have assisted the school, many of them are now distinguished researchers, professors and professionals of informatics. The success of previous editions of the school made it possible to establish relationships between local research groups and international researchers; thus, improving the collaboration between Argentinean and international computer science  institutions.\n' +
			'        The summer school has had as professors some of the most distinguished researchers in different areas of computer science.\n',
		'organizer': 'Organizers',
		'university': 'Universidad de Rio Cuarto \n February 13, 2023',
		'date': "February 13, 2023",
		'home': 'Inicio',
		'schedule': 'Schedule',
		'registration': 'Registracion',
		'program': 'Programa',
		'sponsors': 'Sponsors',
		'school': 'Summer School of Informatic Sciences',
		'venue': 'Venue',
		'get': 'How to get?',
		'firstVenue': 'The school is held on the campus of the National University of Rio Cuarto. It is located 7km away from the city center.' ,
		'secondVenue' : 'To get there, there are taxi and remises companies that can carry out this way (we do not know the prices).',
		'ThirdVenue' :	'In addition, there is a local bus service which covers this route. Local transport (SATCRC) has its own card system (SATBUS). You can get more information on the company page:'
		'comitee': 'Comite Organizador',
		'sponsorsDesc': 'The Rio Cuarto Summer School is supported by the European Union’s Horizon 2020 research and innovation programme under the Marie Skłodowska-Curie grant agreement No. 101008233 (MISSION)',


	},
	'Español': {
		'course1': 'Curso 1',
		'about': 'Sobre la RIO',
		'aboutDesc': 'La Escuela de Informática de Verano de Río es organizada anualmente por el Departamento de Ciencias de la Computación de la Universidad Nacional de Río Cuarto. Tradicionalmente, la escuela es un evento de una semana que se lleva a cabo durante el verano argentino, en febrero. El objetivo original de la escuela fue brindar a los estudiantes de las carreras de informática de la Universidad Nacional de Río Cuarto una visión amplia y actualizada de la disciplina, así como promover el contacto y la interacción entre estudiantes, profesores e investigadores de informática. Con ese fin, la escuela fue diseñada para brindar cursos cortos e intensivos impartidos por destacados investigadores y profesores en ciencias de la computación; los eventos sociales durante la escuela brindan una excelente oportunidad para conectar a estudiantes y profesores de diferentes instituciones. Desde la primera edición de la escuela en 1994, se ha convertido en un evento tradicional para la comunidad informática de Argentina y la región. Más de 3000 estudiantes han asistido a la escuela, muchos de ellos ahora son destacados investigadores, profesores y profesionales de la informática. El éxito de ediciones anteriores de la escuela permitió establecer relaciones entre grupos de investigación locales e investigadores internacionales; mejorando así la colaboración entre instituciones informáticas argentinas e internacionales.\n' +
			' La escuela de verano ha tenido como profesores a algunos de los más destacados investigadores en diferentes áreas de la informática.\n',
		'organizer': 'Organizadores' ,
		'university': 'Universidad de Rio Cuarto \n 13 de Febrero, 2023',
		'date': "13 de Febrero, 2023",
		'home': 'Home',
		'schedule': 'Calendario',
		'registration': 'Registration',
		'program': 'Program',
		'sponsors': 'Sponsors',
		'school': '28 Escuela de Verano de Ciencias Informaticas',

		'index_registration':  'Para registrarse, complete el siguiente formulario',
		'venue': 'Lugar',
		'get': 'Como llegar?',
		'firstVenue': 'La escuela se realiza en el campus de la Universidad Nacional de Rio Cuarto. Se encuentra a 7km de distancia del centro de la Ciudad.' ,
		 'secondVenue' : 'Para llegar existen empresas de taxis y remises que pueden realizar este tramo (desconocemos los precios).',
		'ThirdVenue' :	'Ademas, se cuenta con un servicio de colectivos locales los cuales cubren este trayecto. El transporte local (SATCRC) tiene un sistema propio de tarjeta (SATBUS). Puee obtener mas informacion en la pagina de la empresa:',
		'comitee': 'Organization Commite',
		'sponsorsDesc': 'La Escuela de Verano de Río Cuarto cuenta con el apoyo del programa de investigación e innovación Horizonte 2020 de la Unión Europea en el marco del acuerdo de subvención Marie Skłodowska-Curie No. 101008233 (MISSION)',

	}
};
// Process translation
// $(function() {
// 	$('.translate').click(function() {
// 		var lang = $(this).attr('id');
//
// 		$('.lang').each(function(index, item) {
// 			$(this).text(arrLang[lang][$(this).attr('key')]);
// 		});
// 	});
// });


$(function(){
	$('.selectpicker').selectpicker();
	alert(lang);

});
$('.selectpicker').change(function () {
	alert("Cach");

	var lang = $('.selectpicker').val();
	$('.selectpicker').selectpicker('refresh');

	alert(lang);
	$('.lang').each(function(index, item) {
		$(this).text(arrLang[lang][$(this).attr('key')]);
	});
});

// $(function(){
// 	$('.selectpicker').selectpicker(function() {
// 		var lang = $(('.selectpicker').find('[value=English]')).attr('id');
//
// 		$('.lang').each(function(index, item) {
// 			$(this).text(arrLang[lang][$(this).attr('key')]);
// 		});
// 	});
// });


/* ======= Header animation ======= */
const header = document.getElementById('header');

window.onload=function()
{
    headerAnimation();

};

window.onresize=function()
{
    headerAnimation();

};

window.onscroll=function()
{
    headerAnimation();

};


function headerAnimation () {

    var scrollTop = window.scrollY;

	if ( scrollTop > 100 ) {
	    header.classList.add('header-shrink');

	} else {
	    header.classList.remove('header-shrink');
	}

};

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {

		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));

		const yOffset = 69; //page .header height

		//console.log(yOffset);

		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

		window.scrollTo({top: y, behavior: 'smooth'});


		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}


    });

});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header


// Initialize Gumshoe
var spy = new Gumshoe('#navigation a', {
	offset: 69 //page .header heights
});


/* ======= Countdown ========= */
// set the date we're counting down to
var target_date = new Date("Oct 12, 2028").getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown =  document.getElementById("countdown-box");
var days_span = document.createElement("SPAN");
days_span.className = 'days';
countdown.appendChild(days_span);
var hours_span = document.createElement("SPAN");
hours_span.className = 'hours';
countdown.appendChild(hours_span);
var minutes_span = document.createElement("SPAN");
minutes_span.className = 'minutes';
countdown.appendChild(minutes_span);
var secs_span = document.createElement("SPAN");
secs_span.className = 'secs';
countdown.appendChild(secs_span);

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value.
    days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Days</span>';
    hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Hrs</span>';
    minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Mins</span>';
    secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Secs</span>';

}, 1000);
