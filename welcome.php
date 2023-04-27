<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome!</title>
</head>
<body>
    <?php
        session_start();
        if(isset($_SESSION['username'])){
            echo "<h1>Welcome, " . $_SESSION['username'] . "!</h1>";
        } else {
            echo "<h1>Please log in.</h1>";
        }
    ?> 

    <br>
    <form method="POST" action="logout.php">
        <button type="submit">Logout</button>
    </form>
</body>
</html>