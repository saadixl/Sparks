<?php 
	
	include_once('base62.php');
	
	$idkey = 420;
	$idkey += 1000000;
	$id = encode($idkey);

	echo $id;

	echo "<br />";

	echo decode($id) - 1000000;

 ?>