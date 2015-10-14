info = [ 
	'Amir'
	'http://parsclick.net'
	'http://badansazi.co.uk'
	'http://hassanazimi.com'
]

fillOut = (name, links...) ->
	$('#content').append "#{name} <br />"
	for item in links
		$('#content').append "#{item} <br />"

fillOut info...