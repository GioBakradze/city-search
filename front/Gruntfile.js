module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dist: 'dist/',
        },
        jade: {
            compile: {
                options: {
                    pretty: false
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: '**/*.jade',
                    dest: 'dist/',
                    ext: '.html'
                }]
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                hostname: 'localhost',
                livereload: false,
                options: {
                    livereload: false
                }
            }
        },
        concurrent: {
            server: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['nodemon']
            }
        }
    });

    grunt.registerTask('default', function() {
        var tasks = [
            'clean',
            'jade',
            'concurrent'
        ];

        grunt.task.run(tasks);
    });

};
