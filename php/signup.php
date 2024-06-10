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
$password = password_hash($data['password'], PASSWORD_BCRYPT);

$mysqli = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $mysqli->connect_error]);
    exit();
}

// Check if the mobile number already exists
$stmt = $mysqli->prepare("SELECT * FROM users WHERE mobile = ?");
$stmt->bind_param('s', $mobile);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    http_response_code(409);
    echo json_encode(['error' => 'Mobile number already registered.']);
    $stmt->close();
    $mysqli->close();
    exit();
}

// Insert new user
$stmt = $mysqli->prepare("INSERT INTO users (mobile, password) VALUES (?, ?)");
$stmt->bind_param('ss', $mobile, $password);

if ($stmt->execute()) {
    echo json_encode(['success' => 'User registered successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to register user.']);
}

$stmt->close();
$mysqli->close();
?>
