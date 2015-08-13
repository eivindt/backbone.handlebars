$( document ).ready( function() {

	module( "Handlebars model attribute referencing",
		{
			teardown: function() {
				$("#container").html("")
			}
		}
	)

	test( "Handlebars template reference model attribute", function() {
		var Book = Backbone.Model.extend({})
		var myBookInstance = new Book({
			title:'One Thousand and One Nights', 
			author:'Scheherazade'})

		var template = Handlebars.compile("<h1>{{book.title}}</h1><h2>{{book.author}}</h2>")
		var html = template({book: myBookInstance})

		$("#container").html(html)
		equal($("#container h1").html(), "One Thousand and One Nights", "Book title has been set")
		equal($("#container h2").html(), "Scheherazade", "Book author has been set")
	})

	test( "Handlebars template reference nested model attribute", function() {
		var Book = Backbone.Model.extend({})
		var Author = Backbone.Model.extend({
		})
		var myAuthorInstance = new Author({
			firstname:'Charles',
			lastname:'Dickens'
		})
		var myBookInstance = new Book({
			title:'A Tale of Two Cities', 
			author:myAuthorInstance
		})

		var template = Handlebars.compile("<h1>{{book.title}}</h1><h2>{{book.author.firstname}} {{book.author.lastname}}</h2>")
		var html = template({book: myBookInstance})

		$("#container").html(html)

		equal($("#container h1").html(), "A Tale of Two Cities", "Book title has been set")
		equal($("#container h2").html(), "Charles Dickens", "Book author has been set")
	})

})
