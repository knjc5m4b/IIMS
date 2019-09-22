<?php
    $conn = mysqli_connect('localhost', 'root', '');
    mysqli_query($conn ,"set NAMES `utf8`");
    //選取資料庫
    $db = mysqli_select_db($conn ,'iims');

    $objData = json_decode(file_get_contents("php://input")) ;
    $familyname = isset($objData->familyname) ? $objData->familyname : '' ;
    $givenname = isset($objData->givenname) ? $objData->givenname : '' ;
    $gender = isset($objData->gender) ? $objData->gender : '' ;
    $born = isset($objData->born) ? $objData->born : '' ;
    $email = isset($objData->email) ? $objData->email : '' ;
    $phone = isset($objData->phone) ? $objData->phone : '' ;
    $service = isset($objData->service) ? $objData->service : '' ;
    $address = isset($objData->address) ? $objData->address : '' ;
    $school = isset($objData->school) ? $objData->school : '' ;
    $department = isset($objData->department) ? $objData->department : '' ;
    $salary = isset($objData->salary) ? $objData->salary : '' ;
    $experience = isset($objData->experience) ? $objData->experience : '' ;
    $category = isset($objData->category) ? $objData->category : '' ;
    $position = isset($objData->position) ? $objData->position : '' ;
    $csalary = isset($objData->csalary) ? $objData->csalary : '' ;
    $licensename = isset($objData->licensename) ? $objData->licensename : '' ;
    $license = isset($objData->license) ? $objData->license : '' ;
    $antobiography = isset($objData->antobiography) ? $objData->antobiography : '' ;
    $transportation = isset($objData->transportation) ? $objData->transportation : '' ;
    $rename = isset($objData->rename) ? $objData->rename : '' ;
    $reunits = isset($objData->reunits) ? $objData->reunits : '' ;
    $rephone = isset($objData->rephone) ? $objData->rephone : '' ;
    $seletctcL = isset($objData->seletctcL) ? $objData->seletctcL : '' ;
    $seletctcS = isset($objData->seletctcS) ? $objData->seletctcS : '' ;
    $seletctcR = isset($objData->seletctcR) ? $objData->seletctcR : '' ;
    $seletctcW = isset($objData->seletctcW) ? $objData->seletctcW : '' ;
    $seletcteL = isset($objData->seletcteL) ? $objData->seletcteL : '' ;
    $seletcteS = isset($objData->seletcteS) ? $objData->seletcteS : '' ;
    $seletcteR = isset($objData->seletcteR) ? $objData->seletcteR : '' ;
    $seletcteW = isset($objData->seletcteW) ? $objData->seletcteW : '' ;
    $seletctL = isset($objData->seletctL) ? $objData->seletctL : '' ;
    $seletctaL = isset($objData->seletctaL) ? $objData->seletctaL : '' ;
    $seletctaS = isset($objData->seletctaS) ? $objData->seletctaS : '' ;
    $seletctaR = isset($objData->seletctaR) ? $objData->seletctaR : '' ;
    $seletctaW = isset($objData->seletctaW) ? $objData->seletctaW : '' ;
    $review = isset($objData->review) ? $objData->review : '' ;
    // $objResponse = "資料庫連線";
    $sql="INSERT INTO `resume` (`FamilyName`, `Givenname`, `Gender`, `Born`, `Service`, `Phone`, `Mail`, `Address`, 
    `E_School`, `E_department`, `Salary`, `Experience`, `C_category`, `C_Position`, `C_Salary`, `seletctcL`, `seletctcS`, `seletctcR`, `seletctcW`, 
    `seletcteL`, `seletcteS`, `seletcteR`, `seletcteW`, `seletctL`, `seletctaL`, `seletctaS`, `seletctaR`, `seletctaW`, 
    `License_name`, `License`, `Autobiography`, `Transportation`, `Re_name`, `Re_units`, `Re_phone`, `Review`) 
    VALUES ('$familyname', '$givenname', '$gender', '$born', '$service', '$phone', '$email', '$address', 
    '$school', '$department', '$salary', '$experience', '$category', '$position', '$csalary', '$seletctcL', '$seletctcS', '$seletctcR', '$seletctcW', 
    '$seletcteL', '$seletcteS', '$seletcteR', '$seletcteW', '$seletctL', '$seletctaL', '$seletctaS', '$seletctaR', '$seletctaW', 
    '$licensename', '$license', '$antobiography', '$transportation', '$rename', '$reunits', '$rephone', '$review')";
    
    if (mysqli_query($conn, $sql)) {
        $objResponse = "儲存成功" ;
        echo json_encode($objResponse) ;
        exit() ;
    } else {
        // // header("HTTP/1.0 403 Forbidden") ;
        // $objResponse->{"登入失敗"} ;
        // echo json_encode($objResponse) ;
        // exit() ;    
    }
?>