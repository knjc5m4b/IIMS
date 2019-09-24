<meta charset="utf-8">
<?php 
include "db.php";
header("Content-Type:text/html; charset=utf-8");
echo $numner=$_GET['id'];
$ret=mysqli_query($link,"DELETE FROM `description_file` WHERE `id`='$numner'");

if($ret==1){
	echo"<script>alert('刪除成功');location.href='upload_file.php'</script>";
}else{
	echo"<script>alert('刪除失敗')</script>";
}

?>
