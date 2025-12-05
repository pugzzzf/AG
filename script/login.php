<?php
    // login is not case sensitive.
    include(__DIR__ . "/db.php");
    if(isset($_POST['submit']))
    {
        $user = $_POST['uname'];
        $password = $_POST['pswd'];

        $user = stripslashes($user);
        $password = stripslashes($password);

        $user = mysqli_real_escape_string($conn, $user);
        $password = mysqli_real_escape_string($conn, $password);

        $stmt = $conn->prepare("SELECT * FROM login WHERE uname = ? AND pswd = ?");
        $stmt->bind_param("ss", $user, $password);
        $stmt->execute();

        $result = $stmt->get_result();
        $rows = $result->num_rows;

        if ($rows == 1)
        {
            header("Location: ../html/dashboard.html");
            exit;
        }
        else
        {
            header("Location: ../html/login.html?error=1");
            exit;
        }    
    }
?>

