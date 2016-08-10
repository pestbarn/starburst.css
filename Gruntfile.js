module.exports = function(grunt) {

	grunt.initConfig({
		haml: {
			dist: {
				files: {
					'index.html': 'index.haml'
				}
			}
		},
		watch: {
			css: {
				files: ['scss/*.scss'],
				tasks: ['compass'],
			},
			haml: {
				files: ['*.haml'],
				tasks: ['haml'],
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-haml2html');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('default', ['haml','watch','compass']);

	grunt.event.on('watch', function(action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
}
