
<html>
	<head>
		<link href="images/qwe.ico" rel="shortcut icon"> 
			<title>論文登錄說明檔上傳</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
			<link rel="stylesheet" href="/resources/demos/style.css">
			<link rel="stylesheet" type="text/css" href="M_option.css" />
			<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
			<script src="jquery-ui.js"></script>
		 <script>
			function ShowTime(){           //顯示當下時間
				var NowDate=new Date();
				var Today=new Date();
				document.getElementById('showbox').value+=Today.getFullYear()+"-"+(Today.getMonth()+1)+ "-" +Today.getDate();
				
			}
			$( function() {
				$( "#tabs" ).tabs(); //套用到id元件
			} );
			function ull(){
				var file=document.getElementById("file").value;
				var file2=document.getElementById("file2").value;
				 if(file=="" && file2==""){
					var author = document.querySelector("#file");  // 取得ID為homeTitle的元素 
					author.style.backgroundColor = "#FFCCCC";
					alert("請選擇上傳檔案");
					return false;
				}
					return true;
			}
		</script>
		<style>
			body {
			margin: 0;
			}
			div{
				width:60%;
			}
			.button {
			transition: all 0.5s ease 0s;
			
		}
		/*判斷滑鼠的動作放大圖片還有增加透明度*/
		.button:hover {
			-moz-transform: scale(1.05);
			-ms-transform: scale(1.05);
			-o-transform: scale(1.05);
			-webkit-transform: scale(1.05);
			transform: scale(1.05);
			opacity: .5;
		}
		
		.button2{
				width:90px;
				height:35px;
				color:black;
				border-radius:30px;
				font-family:Microsoft JhengHei;
				background-color: #EEEEEE; 
				border: none;
				color: #000000;
				padding: 5px 15px;
				text-align: center;
				text-decoration: none;
				display: inline-block;
				font-size: 16px;
				margin: 4px 2px;
				-webkit-transition-duration: 0.2s; /* Safari */
				transition-duration: 0.2s;
				cursor: pointer;
		
			}
			.button2:hover,
			.button2:focus {
				
				background: #CCEEFF;
				background: -webkit-gradient(linear, left top, left bottom, from(#CCEEFF), to(#CCEEFF));
				background: -moz-linear-gradient(top, #ffffff, #CCEEFF);
				background: linear-gradient(to bottom, #ffffff, #CCEEFF);
				color: #000000;
				text-decoration: none;
			}
			tr:nth-child(even) {background: #FFF}/*表格顏色奇偶數跳轉*/
			tr:nth-child(odd) {background: #EEEEEE}
			
		</style>
	</head>
	<body align="center"  onload="ShowTime();">
		<center>
			<div class="title">
				<a class="button" href='index.php'>登出</a>
				<h1 width="100%">學術期刊學報論文發表系統-說明檔上傳</h1>
			</div></br></br></br>
			<div id="tabs">
				<ul>
					<li><a href="#tabs-1">上傳說明檔</a></li>
					<li><a href="#tabs-2">下載說明檔</a></li>
				</ul>
				<div id="tabs-1">
				<h2>說明檔上傳</h2>
				<form id="a0" name="a0" enctype="multipart/form-data" action="upload_file_insert.php" method="POST" onsubmit='return tt();'>
					<table width="100%">
						<tr>
							<td  width="50%">
								論文登錄說明檔上傳
							</td>
							<td>
								<input type="hidden"  id="showbox" name="showbox" value="" >
								<input type="file" id="file" name="file" >
								<input type="hidden" value="0" name="no" >
								
							</td>
							<td>
								<input type="submit" class="button" value="上傳" onclick="return ull();" >	
							</td>
						</tr>
						<tr>
							<td width="50%">
								研討會論文說明檔
							</td>
							<td>
								<input type="hidden"  id="showbox2" name="showbox2" value="" >
								<input type="file" id="file2" name="file2" >
								<input type="hidden" value="0" name="no2" >
							</td>
							<td>
								<input type="submit" class="button" value="上傳" onclick="return ull();" >
							</td>
						</tr>
					</table>				
				</form>
				</div>
				<div id="tabs-2">
				<h2>論文登錄說明檔</h2>	
					<table width="100%">
						<tr>
							
							<td>
								<?php 		
									echo "論文登錄說明檔：<a href='http://oes3.im.ukn.edu.tw/~publish/file/description_file/論文登錄說明檔.pdf'  target='_blank'>下載</a>";
								?>
							</td>
						</tr>
						<tr>
							<td>
								<?php 		
									echo "研討會論文說明檔：<a href='http://oes3.im.ukn.edu.tw/~publish/file/description_file/研討會論文說明檔.pdf'  target='_blank'>下載</a>";
								?>
							</td>
						</tr>
						
					</table>
						
						
				</div>
				</div>
				<img src='images/arrow_left.png' class='button'onclick=location.href='http://oes3.im.ukn.edu.tw/~publish/index2.php'>	
		</center>
	</body>
</html>
