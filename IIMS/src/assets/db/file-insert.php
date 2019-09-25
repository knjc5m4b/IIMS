<meta charset="utf-8">
<?php 
	header('Content-Type: text/plain; charset=utf-8');
	// $conn = mysqli_connect('localhost', 'root', '');
    // mysqli_query($conn ,"set NAMES `utf8`");
    // //選取資料庫
	// $db = mysqli_select_db($conn ,'iims');	

	if(isset($_FILES['filePDF'])) {
		$file1=$_FILES['filePDF']['name'];
		if($file1!=""){			
			$name=$_FILES['filePDF']['name'];//檔案名稱
			// $type=$_FILES['filePDF']['type'];//檔案類型
			// $size=($_FILES['filePDF']['size']/1024);//檔案大小
			$tmp= file_get_contents($_FILES['filePDF']['tmp_name']);
			/* echo "檔案名稱: " . $name."<br/>";
			echo "檔案類型: " . $type."<br/>";
			echo "檔案大小: " . $size." Kb<br/>";
			echo "暫存名稱: " . $tmp."<br/>";
			echo 'error：'.$_FILES["file"]["error"]."</br>";*/
			$file=explode(".",$_FILES['filePDF']['name']);//將檔案名稱以.分割
			$file[0]."</br>";//主檔名
			$file[1]."</br>";//副檔名
			if($file[1]=='pdf'||$file[1]=='PDF'){
				$ret=move_uploaded_file($_FILES['filePDF']['tmp_name'],"assets/pdf/".$_FILES['filePDF']['name']); //將檔案搬移至file資料夾
				if($ret){
					$objResponse="上傳成功";
					echo json_encode($objResponse);
					exit() ;
				}else{
				} 
			}else{
				echo"<script>alert('上傳失敗,副檔名請轉成pdf檔');location.href='./file_insert.php'</script>";
			}
		} else {
			$objResponse="失敗";
			echo json_encode($objResponse);
		}
	} else {
		$objResponse= $_FILES['filePDF']['error'];
		echo json_encode($objResponse);
	}
?>