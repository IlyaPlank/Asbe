<?php

$recepient = "yo@ya.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$url = trim($_POST["url"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$textarea = trim($_POST["textarea"]);
$message = "Имя: $name \nURL: $url \nE-mail: $email \nОбъект: $subject \nТекст: $textarea";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");