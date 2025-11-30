<?php
    $con = mysqli_connect("127.0.0.1", "root", "", "CorpAG");

    if ($con == false)
    {
        die("Connection error: ". mysqli_connect_error());
    }
?>