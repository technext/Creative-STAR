<?php

	$to = 'username@test.com';  // please change this email id
	
	$errors = array();
	// print_r($_POST);

	// Check if fullname has been entered
	if (!isset($_POST['fullname'])) {
		$errors['fullname'] = 'Please enter your fullname';
	}
	
	// Check if email has been entered and is valid
	if (!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errors['email'] = 'Please enter a valid email address';
	}
	
	//Check if phone no has been entered
	if (!isset($_POST['phone'])) {
		$errors['phone'] = 'Please enter your phone no';
	}

	//Check if mailling address has been entered
	if (!isset($_POST['mail'])) {
		$errors['mail'] = 'Please enter your mailling address';
	}

	//Check if project title has been entered
	if (!isset($_POST['title'])) {
		$errors['title'] = 'Please enter your project title';
	}

	//Check if project detail has been entered
	if (!isset($_POST['pdetail'])) {
		$errors['pdetail'] = 'Please enter your project detail';
	}

	//Check if project budget has been entered
	if (!isset($_POST['budget'])) {
		$errors['budget'] = 'Please enter your project budget';
	}

	//Check if deadline has been entered
	if (!isset($_POST['deadline'])) {
		$errors['deadline'] = 'Please enter your deadline';
	}


	$errorOutput = '';

	if(!empty($errors)){

		$errorOutput .= '<div class="alert alert-danger alert-dismissible" role="alert">';
 		$errorOutput .= '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

		$errorOutput  .= '<ul>';

		foreach ($errors as $key => $value) {
			$errorOutput .= '<li>'.$value.'</li>';
		}

		$errorOutput .= '</ul>';
		$errorOutput .= '</div>';

		echo $errorOutput;
		die();
	}



	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$mail = $_POST['mail'];
	$title = $_POST['title'];
	$pdetail = $_POST['pdetail'];
	$budget = $_POST['budget'];
	$deadline = $_POST['deadline'];
	$from = $email;
	$subject = 'Quote Form : Creative Star Pro Responsive HTML5 Template';
	
	$body = "From: $fullname\n E-Mail: $email\n Title:\n $title Phone:\n $phone Project-Detail:\n $pdetail Budget:\n $budget Deadline:\n $deadline";


	//send the email
	$result = '';
	if (mail ($to, $subject, $body)) {
		$result .= '<div class="response-success">';
		$result .= '<span class="fa fa-check"></span> Request successfully sent';
		$result .= '</div>';

		echo $result;
		die();
	}

	$result = '';
	$result .= '<div class="response-fail" role="alert">';
	$result .= '<span class="fa fa-exclamation"></span> Please fix the errors bellow';
	$result .= '</div>';

	echo $result;
	die();


?>
	