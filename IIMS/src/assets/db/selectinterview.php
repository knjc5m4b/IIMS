<?php 
	$conn = mysqli_connect('localhost', 'root', '');
	mysqli_query($conn ,"set NAMES `utf8`");
	//選取資料庫
	$db = mysqli_select_db($conn ,'iims');

	$objData = json_decode(file_get_contents("php://input")) ;
	$status = isset($objData->statusnum) ? $objData->statusnum : '' ;
	$strs = '';

	$ret=mysqli_query($conn,"SELECT * FROM `resume` where `Cvstatus`='審核通過'");

	if (mysqli_num_rows($ret)>0){
		while($row=mysqli_fetch_array($ret)){
			$str = "$row[0], $row[1]";
			$strs = "$str, $strs";
			$objResponse ="$strs";
		}
		echo "$strs";
		// echo json_encode($objResponse);
	}

	// echo"<table  align='center' border='0' solid black'  width='100%'>";
	// echo "<tr class='headerrow'>
	// 		<th width='20%'>姓氏</th>
	// 		<th width='20%'>名字</th>
	// 		<th width='20%'>履歷審核狀態</th>
	// 	</tr>";
	// 	while($row=mysqli_fetch_array($ret)){
	// 		echo "<tr>
	// 				<td>$row[FamilyName]</td>
	// 				<td>$row[Givenname]</td>
	// 				<td>$row[Cvstatus]</td>
	// 				</tr>
	// 				";
			
			
	// 	}
	// echo"</table>";
?>