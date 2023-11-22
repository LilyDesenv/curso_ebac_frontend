module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                options:{
                    compress: true,
                },
                files:{
                    'build/styles/main.css':'src/styles/main.less'
                }
            }  
        },
        uglify:{
            target: {
                files: {
                    'build/script/main.min.js':'src/script/main.js'
                }
            }
        }
    })


    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:development','uglify'])
}