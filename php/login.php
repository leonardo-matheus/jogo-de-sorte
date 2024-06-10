<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['mobile']) || !isset($data['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields.']);
    exit();
}

$mobile = $data['mobile'];
$password = $data['password'];

$mysqli = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $mysqli->connect_error]);
    exit();
}

// Verify user credentials
$stmt = $mysqli->prepare("SELECT password FROM users WHERE mobile = ?");
$stmt->bind_param('s', $mobile);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid mobile number or password.']);
    $stmt->close();
    $mysqli->close();
    exit();
}

$stmt->bind_result($hashedPassword);
$stmt->fetch();

if (password_verify($password, $hashedPassword)) {
    echo json_encode(['success' => 'Login successful.']);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid mobile number or password.']);
}

$stmt->close();
$mysqli->close();
?>

