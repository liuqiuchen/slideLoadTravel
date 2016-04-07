
module.exports = function (grunt) {

	grunt.initConfig({
		//压缩文件
		uglify: {
			my_target: {
				files: {
					'dist/script/main.min.js': ['src/js/main.js'],
					'dist/script/test.min.js': ['src/js/test.js']
				}
			}
		},

		//清空压缩文件
		clean: {
			src: 'dist/*'
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	//执行grunt自动压缩
	grunt.registerTask('default', ['uglify']);

};










