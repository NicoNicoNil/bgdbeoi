<?php
  if (isset($_REQUEST['query'])) {
    $sQuery = http_build_query($_REQUEST);
    header('Content-Type: application/json');
    echo file_get_contents('https://defaul.to/?'.$sQuery);
    exit;
}
?>