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
        jshint: {
            app: {
                src: 'app/**/*.js'
            }
        },
        concat: {
            app: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/app.map'
                },
                files: {
                    'dist/app.js': [
                        'app/*/**/*.js'
                    ]
                }
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
        watch: {
            stylus: {
                files: '**/*.styl',
                tasks: 'stylus',
                options: {
                    spawn: true,
                    cwd: 'app/css/'
                }
            },
            js: {
                files: ['**/*.js'],
                tasks: [
                    'jshint',
                    'concat'
                ],
                options: {
                    spawn: true,
                    cwd: 'app/js/'
                }
            },
            jade: {
                files: '**/*.jade',
                tasks: [
                    'jade'
                ],
                options: {
                    spawn: true,
                    cwd: 'app/'
                }
            }
        },
        concurrent: {
            server: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['nodemon', 'watch']
            }
        },
        bower_concat: {
            all: {
                dest: 'dist/lib.js',
                cssDest: 'dist/lib.css',
                bowerOptions: {
                    relative: false
                }
            }
        }
    });

    grunt.registerTask('default', function() {
        var tasks = [
            'clean',
            'jade',
            'stylus',
            'jshint',
            'concat',
            'bower_concat',
            'concurrent'
        ];
        grunt.task.run(tasks);
    });

};
