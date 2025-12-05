<?php
    $host = "127.0.0.1";
    $user = "root";
    $pass = "";
    $db   = "CorpAG";

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        echo json_encode(["error" => "DB connection failed"]);
        exit;
    }
?>