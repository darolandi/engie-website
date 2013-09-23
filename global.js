$(document).ready(function(){	
	// #sidebox is done here so one change can affect all pages
	$("#sidebox").html("\
		<div id='navigation'> \
			<a href='index.html'>HOME</a> \
			<a href='photos.html'>PHOTOS</a> \
			<a href='calendar.html'>CALENDAR</a>  \
			<a href='links.html'>LINKS</a> \
			<a href='about.html'>ABOUT US</a> \
		</div> \
		<div id='widgets'> \
			<a href='https://northseattle.edu'><img style='border: 1px solid #ccccff; border-radius: 3px;' src='images/northseattle.jpg' /></a> \
			<p> \
			Image Slider by <a href='http://www.menucool.com/javascript-image-slider'>MenuCool</a><br /> \
			Website by Daniel Rolandi<br /> \
			Last Update: 5/8/2013 \
			</p> \
		</div> \
	");
});