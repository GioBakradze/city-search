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
        stylus: {
            compile: {
                options: {
                    sourcemap: {
                        inline: true
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: '**/*.styl',
                    dest: 'dist/',
                    ext: '.css'
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
            'stylus',
            'concurrent'
        ];

        grunt.task.run(tasks);
    });

};
