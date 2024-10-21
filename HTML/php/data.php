<?php

function dd($data){
    print('<pre>');
    print_r($data);
    print('</pre>');
}

$data = $_GET;

dd($data);