<?php
    $host = 'localhost'; 
    $user = 'kam_x';
    $password = '89826656928';
    $db_name = 'kam_x';
    $connect = mysqli_connect($host, $user, $password, $db_name);
    mysqli_query($connect, "SET NAMES 'utf8'");
    $name = trim($_POST['name']);
    $number = trim($_POST['number']);
    $nik = trim($_POST['nik']);

    $zapros="SELECT * FROM clint";
    $res = mysqli_query($connect, $zapros);
?>
<?php
    $query = "INSERT INTO client (name, number, nik) VALUES ('$name', '$number', '$nik')";
    $result = mysqli_query($connect, $query) or die( mysqli_error($connect) );
?>
<!-- disconect bd -->
<?php
    function closeDB () {
        global $mysqli;
        $mysqli->close ();
    }
?>