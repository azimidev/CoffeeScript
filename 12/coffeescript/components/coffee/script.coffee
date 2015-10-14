names = [
	'Amir'
	'Shadi'
	'Mahdi'
	'Sara'
	'Mina'	
]

for thing in names
	console.log thing

for thing, i in names
	console.log "#{i} #{thing}"

console.log "#{thing} #{i}" for thing, i in names when thing isnt "Amir"

info = 
	name: 'Amir'
	title: 'Software Engineer'
	tuts: 'http://hassanazimi.com'

for key, value of info
	console.log "#{key} #{value}"