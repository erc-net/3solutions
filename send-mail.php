<?php
// Allow CORS if your frontend is hosted on a different port during dev (remove or restrict in production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// Get JSON posted data from Vite frontend
$input = json_decode(file_get_contents('php://input'), true);

$name = strip_tags(trim($input['name'] ?? ''));
$email = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = strip_tags(trim($input['phone'] ?? 'Not provided'));
$service = strip_tags(trim($input['service'] ?? 'General Inquiry'));
$message = strip_tags(trim($input['message'] ?? ''));

// Validate required fields
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Please fill out all required fields with a valid email."]);
    exit();
}

// Email configuration
$to = "info@3solutions.co.zw";
$subject = "New Inquiry: " . $service . " from " . $name;

$email_content = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Phone: $phone\n";
$email_content .= "Service Required: $service\n\n";
$email_content .= "Message:\n$message\n";

$headers = "From: no-reply@3solutions.co.zw\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email using cPanel's native mail system
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email. Please check your cPanel mail configuration."]);
}
?>