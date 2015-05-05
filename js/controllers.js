var App = angular.module("myApp", []);

App.controller('AuthorController', function AuthorController($scope){
	$scope.persons = [
	{
		 "name" : "Denis Karanja",
		 "title" : "Developer",
		 "company" : "Deebeat City KE",
		 "bio" : "The lead developer for Deebeat City KE"
	},

	{
		 "name" : "Moses James",
		 "title" : "Designer",
		 "company" : "Yahoo Inc",
		 "bio" : "The lead designer in Yahoo Inc"
	},

	{
		 "name" : "Jessica Lord",
		 "title" : "Analyst",
		 "company" : "Github",
		 "bio" : "Business analyst at Github"
	},

	{
		 "name" : "Maureen Karanja",
		 "title" : "Strategist",
		 "company" : "Deebeat City KE",
		 "bio" : "The lead strategist in the company"
	},

	{
		 "name" : "Rosemary Muchiri",
		 "title" : "Medical Officer",
		 "company" : "Deebeat City KE",
		 "bio" : "The lead MO in the company"
	},

	{
		 "name" : "Fridah Karanja",
		 "title" : "Human Resource",
		 "company" : "Barclays Bank KE",
		 "bio" : "Human Resource assistant"
	}
]
});