# backbone.handlebars

A simple [Backbone.js](http://backbonejs.org/) allowing handlebar templates to access Model attributes intuitively.

This plugin takes the code from A. Matías Quezada's gist at https://gist.github.com/amatiasq/4710958
and makes it possible to access backbone Model instances' attributes using normal handlebars syntax.

Simply add the plugin to your config in order to use it.

## Example

In a view template, refer to attributes as normally.

	<script type="text/template" id="MyItemViewTemplate">
		<h1>{{book.title}}</h1>
		<h2>{{book.author.firstname}} {{book.author.lastname}}</h2>")
	</script>

In the view class:

```javascript
MyViewClass = Backbone.View.extend({
	render: function() {
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
		this.$el.html(this.template({book: myBookInstance}))
	},
	...
```



