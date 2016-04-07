
module.exports = function (grunt) {

	grunt.initConfig({
		//ѹ���ļ�
		uglify: {
			my_target: {
				files: {
					'dist/script/main.min.js': ['src/js/main.js'],
					'dist/script/test.min.js': ['src/js/test.js']
				}
			}
		},

		//���ѹ���ļ�
		clean: {
			src: 'dist/*'
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	//ִ��grunt�Զ�ѹ��
	grunt.registerTask('default', ['uglify']);

};










