# Vue-cli-nginx-simple

将vue-cli 生成的包发布到 nginx 服务器子目录

<h1>操作系统</h1>
macOS

<h1>需要安装工具</h1>
<table>
  <ul>
    <li>Homebrew</li>
    <li>npm</li>
    <li>vue-cli</li>
    <li>nginx</li>
  </ul>
</table> 

<h1>环境</h1>
<table>
  <ul>
    <li>node v10.11.0</li>
    <li>vue 2.9.6</li>
    <li>nginx 1.17.1</li>
  </ul>
</table>

<h1>安装环境</h1>
<table>
  <tr>
    <th>
      工具
    </th>  
    <th>
      命令
    </th>  
  </tr>
  <tr>
    <td>
      Homebrew
    </td>  
    <td>
      $/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    </td>  
  </tr>
  <tr>
    <td>
      npm
    </td>  
    <td>
      $brew install node
    </td>  
  </tr>
  <tr>
    <td>
      vue-cli
    </td>  
    <td>
      $sudo npm install --global vue-cli
    </td>  
  </tr>
  <tr>
    <td>
      nginx
    </td>  
    <td>
      $brew install nginx
    </td>  
  </tr>
</table>

<h1>nginx</h1>
<table>
  <h4>配置文件默认目录</h4>  
  <code>/usr/local/etc/nginx/nginx.conf
  </code>
  <h4>配置修改</h4>
  <pre>
    <code>   
location / {
    try_files $uri $uri/ /子目录/index.html;
}
    </code>
  </pre>

  <h4>启动nginx服务器</h4>
  <code>
    $brew services start nginx
  </code>
  <h4>服务器默认目录</h4>
  <code>
    /local/Cellar/nginx/版本号/html
  </code> 
</table>

<h1>vue 使用到的命令</h1>

<h4>构建项目</h4>
<code>
$vue init webpack name
</code>
<h4>安装</h4>
<code>
$cd name
</code>
<code>
$npm install
</code>
<h4>运行(测试环境)</h4>
<code>
$npm run dev
</code>
<h4>发布</h4>
<code>
$npm run build
</code>

<h1>vue 发布需要修改部分</h1>
<table>
  <h4>/config/index.js</h4>
  <pre>
    <code>
    build: {
      ...
      assetsPublicPath: './',
      ...
    }
    </code>
  </pre>
  <h4>/src/router/index.js</h4>
  <pre>
    <code>
    export default new Router({
      mode: 'history',
      base: '/子目录/',
      ...
    })
    </code>
  </pre>
</table>

<h1>具体操作流程</h1>
<table>
	<ol>
		<li>创建vue项目</li>
			<code>
$vue init webpack job
			</code>
		<li>修改vue</li>
			<pre>
				<code>
/config/index.js
				</code>
				<code>
build: {
	...
	assetsPublicPath: './',
	...
}
				</code>
				<code>
/src/router/index.js
				</code>
				<code>
export default new Router({
	mode: 'history',
	base: '/job/',
	routes: [
	...
})
				</code>
			</pre>
		<li>生成发布包</li>
			<code>$npm run build</code>
		<li>修改nginx配置</li>
			<pre>
				<code>
/usr/local/etc/nginx/nginx.conf
				</code>
				<code>
location / {
	try_files $uri $uri/ /job/index.html;
}
				</code>
			</pre>
		<li>启动nginx服务器</li>
			<code>$brew services start nginx</code>
		<li>将vue生成的包放入nginx</li>
			<ol>
				<li>在nginx服务器主目录创建sort文件夹</li>
				<li>将vue生成的dist文件夹(和src同目录)下的所有文件放入sort文件夹</li>
			</ol>
		<li>查看结果</li>
			<code><a href="http://localhost:8080/sort/">浏览器打开 http://localhost:8080/sort/</a>
  			</code>
	</ol>
</table>



