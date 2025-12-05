<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Content-Type: application/json");

include(__DIR__ . "/db.php");

// Optional filters
$from = $_GET['from'] ?? null;
$to   = $_GET['to'] ?? null;

$sql = "SELECT fecha, temperatura, humedad, presion 
        FROM bme280_data WHERE 1=1";

$params = [];
$types  = "";

if ($from) {
    $sql .= " AND fecha >= ?";
    $params[] = $from;
    $types .= "s";
}

if ($to) {
    $sql .= " AND fecha <= ?";
    $params[] = $to;
    $types .= "s";
}

$sql .= " ORDER BY fecha ASC";

$stmt = $conn->prepare($sql);

if ($types !== "") {
    $stmt->bind_param($types, ...$params);
}

$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);
?>
