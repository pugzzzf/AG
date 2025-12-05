<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Content-Type: application/json");

include(__DIR__ . "/db.php");

// Return list of dates + counts
$sql = "
    SELECT DATE(fecha) AS day, COUNT(*) AS count
    FROM bme280_data
    GROUP BY DATE(fecha)
    ORDER BY day DESC
";

$result = $conn->query($sql);
$data = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);
?>
