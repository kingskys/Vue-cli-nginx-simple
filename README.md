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


<h1>nginx<h1>
<table>
  <h4>配置文件默认目录</h4>  
  <code>/usr/local/etc/nginx/nginx.conf
  </code>
  <h4>配置修改</h4>
  <tr>   
    
    location / {
        try_files $uri $uri/ /子目录/index.html;
    }
  </tr>
  <h4>启动nginx服务器</h4>
  <code>
    $brew services start nginx
  </code>
  <h4>服务器默认目录</h4>
  <tr>
  
    /local/Cellar/nginx/版本号/html
  </tr> 
</table>
  
	

<h1>vue 使用到的命令</h1>
<table>
  <h4>构建项目</h4>
  <tr>
    
	$vue init webpack name
  </tr>
	<h4>安装</h4>
  <tr>
  
	$cd name
	$npm install
  </tr>
  <h4>运行(测试环境)</h4>
  <tr>
  
	$npm run dev
  </tr>
	<h4>发布</h4>
  <tr>
  
	$npm run build
  </tr>
</table>

<h1>vue 发布需要修改部分</h1>
<table>
  <h4>/config/index.js</h4>
  <tr>

    build: {
      ...
      assetsPublicPath: './',
      ...
    }
  </tr>
  <h4>/src/router/index.js</h4>
  <tr>

    export default new Router({
      mode: 'history',
      base: '/子目录/',
      ...
    })
  </tr>
</table>

<h1>具体操作流程示例</h1>
<table>
  <h4>1. 创建vue项目</h4>
  <tr>

    $vue init webpack job

    Use ESLint to lint your code? 选N 其它一直确认就行
  </tr> 
  
  <h4>2. 修改vue</h4>
  <tr>
      
    /config/index.js
    build: {
      ...
      assetsPublicPath: './',
      ...
    }

    /src/router/index.js
    export default new Router({
      mode: 'history',
      base: '/job/',
      routes: [
      ...
    })
 
  </tr>
  
  <h4>3. 生成发布包</h4>
  <tr>
  
    $npm run build
  </tr>
  
  <h4>4. 修改nginx配置</h4>
  <tr>
  
    /usr/local/etc/nginx/nginx.conf

    location / {
        try_files $uri $uri/ /job/index.html;
    }
  </tr>
  
  <h4>5. 启动nginx</h4>
  <tr>
  
    $brew services start nginx
  </tr>
  
  <h4>6. 将vue生成的包放入nginx</h4>
  <tr>
  
    6.1 在nginx服务器主目录创建sort文件夹
  	6.2 将vue生成的dist文件夹(和src同目录)下的所有文件放入sort文件夹
  </tr>
  
  <h4>7. 查看结果</h4>
  <tr>
  
    浏览器打开 http://localhost:8080/sort/
  </tr>
</table>



