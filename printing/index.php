<?php
    $ip = $_SERVER['REMOTE_ADDR'];
    $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));

    if($details->country == "AM") {
      header("Location: http://platinuminkdesign.com/hy.html");
      die();
    } 

    header("Location: http://platinuminkdesign.com/en.html");
    die();

?>