<?php 

	require('auth.php');
	include_once('base62.php');

	$url = $_POST['inputurl'];

	$lastId = 0;

	$sql = "SELECT id FROM urls ORDER BY id DESC LIMIT 1";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
    	// output data of each row
    	while($row = $result->fetch_assoc()) {
        	$lastId = $row["id"];
    	}
	} else {
    	echo "f";
	}

	$idkey = $lastId + 1;
	$idkey += 1000000;
	$uniqid = encode($idkey);


	$sql = "INSERT INTO urls (uniqid, url)
VALUES ('$uniqid', '$url')";

	if ($conn->query($sql) === TRUE) {
  	  echo $uniqid;
	} else {
  	  echo "f";
	}

	$conn->close();



 ?>