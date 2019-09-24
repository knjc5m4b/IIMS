<meta charset="utf-8">
<?php 
	$conn = mysqli_connect('localhost', 'root', '');
    mysqli_query($conn ,"set NAMES `utf8`");
    //選取資料庫
	$db = mysqli_select_db($conn ,'iims');
	$objData = json_decode(file_get_contents("php://input")) ;
	$file = isset($objData->file) ? $objData->file : '' ;
    $filename = isset($objData->name) ? $objData->name : '' ;
	$filetype = isset($objData->type) ? $objData->type : '' ;
	$filesize = isset($objData->size) ? $objData->size : '' ;
	$filetmp_name = isset($objData->tmp_name) ? $objData->tmp_name : '' ;


	$file1=$_FILES[$file][$filename];
		if($file1!=""){			
			$name=$_FILES[$file][$filename];//檔案名稱
			$type=$_FILES[$file][$filetype];//檔案類型
			$size=round($_FILES[$file][$filesize]/1024,2);//檔案大小
			$tmp= $_FILES[$file][$filetmp_name];
			/* echo "檔案名稱: " . $name."<br/>";
			echo "檔案類型: " . $type."<br/>";
			echo "檔案大小: " . $size." Kb<br/>";
			echo "暫存名稱: " . $tmp."<br/>";
			echo 'error：'.$_FILES["file"]["error"]."</br>";*/
			$file=explode(".",$_FILES[$file][$filename]);//將檔案名稱以.分割
			$file[0]."</br>";//主檔名
			$file[1]."</br>";//副檔名
			$new_name="論文登錄說明檔.pdf";
				if($file[1]=='pdf'||$file[1]=='PDF'){
				$ret=move_uploaded_file($_FILES[$file][$filetmp_name],"../pdf".$new_name); //將檔案搬移至file資料夾
			}else{
				echo"<script>alert('上傳失敗,副檔名請轉成pdf檔');location.href='file_insert.php'</script>";
				}
		}
			if($ret==1){
				echo"<script>alert('上傳成功');location.href='file_insert.php'</script>";
			}else{
			 	echo"<script>alert('上傳失敗');location.href='file_insert.php'</script>";
			}  

?>