<?php
    require('initialize.php');
    $result = mysqli_query($conn, "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$database'");

    if (mysqli_num_rows($result) == 0) {
        $sql_create_database = "CREATE DATABASE $database";
        if (mysqli_query($conn, $sql_create_database)) {
            echo "<script> 
            alert('Database made'); 
            </script>";
            header("Location: index.html");
        } else {
            echo "Error creating database: " . mysqli_error($conn);
        }
    } else {
        header("Location: index.html");
    }
    
    mysqli_close($conn);
?>
