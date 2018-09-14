//全局配置
const config={
	htmloptions:{
		removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	},
	 serveroptions: {// 热更新服务
        root: './dist',
        port: 8000,
        livereload: true 
   },
	 cssoptions:{//css配置
	 	"index":{//index页面的css    数组中存放一组组css
	 		"common":[//index页面处理之后的common.min.css需要合并的文件
				 				"./src/stylesheets/reset.css",
				 				"./src/views/index/stylesheets/common/*.css"
				 			],
	 				//index处理之后的index.min.css需要合并的文件
	 				"index":"./src/views/index/stylesheets/index/*.css"	
	 	},
	 	"list":{
	 		"list":[
	 					"./src/stylesheets/reset.css",
	 					"./src/views/list/*/*.css"
	 				]
	 	}	
	 },
	 jsoptions:{//js配置
	 	'index':{//首页的入口
	 		index:'./src/views/index/javascript/index.js',
			vendor:'./src/views/index/javascript/vendor.js'	
	 	},
	 	'list':'./src/views/list/javascript/list.js'
	 },
	 pages:['index','list','car']
}
//把config暴露出去 只能暴露一次 可以暴露数组
module.exports=config