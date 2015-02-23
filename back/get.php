<?php 

	require('auth.php');

	$id = $_POST['id'];

 

$sql = "SELECT url FROM urls WHERE uniqid='$id'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["url"];
    }
} else {
    echo "f";
}
$conn->close();



 ?>