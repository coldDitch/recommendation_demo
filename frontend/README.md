Frontend app for recommendation system

Before you start developing you need to add modules
E.g. using yang package manager
$ yarn

Opening up developing environment
$ yarn start

Base structure. I'll improve this soon.

Structure:
frontend
	package.json

	public
	 icon for webpage and main html page
	
	src
	 all relevant functionality

		api
		 functionality for communicating with server

		assests
		 files

		components
		 small page components

		lang
		 language packages

		lib
		 helper functions

		store
		 functions for handling data

		styles
		 css

		unit_tests
		 files for unit testing		

		views
		 pages on website

		index.js
		 javascript file for rendering react		

	yarn.lock
