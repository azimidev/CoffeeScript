append = (i) ->
	$('#content').append i

author = 'Amir'

switch author
	when 'Amir' then append 'Ruby'
	when 'Hassan' then append 'PHP'
	when 'Mike' then append 'JavaScript'
	else append 'Software Training'
