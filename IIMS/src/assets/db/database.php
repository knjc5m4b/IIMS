<?php
    $conn = mysqli_connect('localhost', 'root', '');
    mysqli_query($conn ,"set NAMES `utf8`");
    //選取資料庫
    $db = mysqli_select_db($conn ,'php');

    $objData = json_decode(file_get_contents("php://input")) ;
    $account = isset($objData->account) ? $objData->account : '' ;
    $password = isset($objData->password) ? $objData->password : '' ;
    // $objResponse = "資料庫連線";
    $ret=mysqli_query($conn,"SELECT * FROM `user` where `email`='$account' and `pwd`='$password';");
    
    if (mysqli_num_rows($ret)>0) {
        $objResponse = "登入成功" ;
        echo json_encode($objResponse) ;
        exit() ;
    } else {
        // // header("HTTP/1.0 403 Forbidden") ;
        // $objResponse->{"登入失敗"} ;
        // echo json_encode($objResponse) ;
        // exit() ;    
    }
?>