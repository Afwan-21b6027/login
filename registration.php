<?php
    require('db.php');

    $tableName = "users";
    $tableExists = false;
    $result = mysqli_query($conn, "SHOW TABLES LIKE '$tableName'");
    if (mysqli_num_rows($result) == 1) {
        $tableExists = true;
    }

    if (!$tableExists) {
        $sql = "CREATE TABLE $tableName (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(30) NOT NULL,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL
        )";

        if (mysqli_query($conn, $sql)) {
            echo "Table created successfully";
        } else {
            echo "Error creating table: " . mysqli_error($conn);
        }
    }

    

    mysqli_close($conn);
?>