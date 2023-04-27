<?php
    include('db.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql_search = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($conn, $sql_search);

    $row = mysqli_fetch_assoc($result);


    if (password_verify($password, $row['password'])){
        echo "<script> 
            alert('User Found!'); 
            </script>";
    } else {
        echo "<script> 
            alert('Account is not found!'); 
            </script>";
        header("Location: index.html");
    }
?>