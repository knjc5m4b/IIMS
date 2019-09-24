<?php 
	$conn = mysqli_connect('localhost', 'root', '');
	mysqli_query($conn ,"set NAMES `utf8`");
	//選取資料庫
	$db = mysqli_select_db($conn ,'iims');

	$objData = json_decode(file_get_contents("php://input")) ;
	$name = isset($objData->name) ? $objData->name : '' ;
	$ret=mysqli_query($conn,"SELECT * FROM `resume` where `Givenname` LIKE '$name' ");

	if ($row=mysqli_num_rows($ret)>0) {
		$row=mysqli_fetch_array($ret);
		$objResponse = "$row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6], $row[7], $row[8], $row[9], $row[10],
		$row[11], $row[12], $row[13], $row[14], $row[15], $row[16], $row[17], $row[18], $row[19], $row[20], $row[21],
		$row[22], $row[23], $row[24], $row[25], $row[26], $row[27], $row[28], $row[29], $row[30], $row[31], $row[32], 
		$row[33], $row[34], $row[35]" ;
        echo json_encode($objResponse) ;
        exit() ;
    } else {
        // // header("HTTP/1.0 403 Forbidden") ;
        // $objResponse->{"登入失敗"} ;
        // echo json_encode($objResponse) ;
        // exit() ;    
    }
	// echo"<table  align='center' border='0' solid black'  width='100%'>";
	// echo "<tr class='headerrow'>
	// 		<th width='20%'>單位名稱</th>
	// 		<th width='20%'>學術期刊/學報論文總數量 </th>
	// 		<th width='20%'>詳細資料</th>
	// 	</tr>";
	// 	while($row=mysqli_fetch_array($ret)){
	// 		echo "<tr>
	// 				<td>$row[unit]</td>
	// 				<td>$row[總數]</td>
	// 				<td width='20%'><button onclick=location.href='select_2.php?unit=$row[unit] class='button1'>查看</button></td>
					
	// 			</tr>
	// 			";
			
			
	// 	}
	// echo"</table>";


?>