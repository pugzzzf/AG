<?php
    include(__DIR__ . "/db.php");
    if(isset($_POST['submit']))
    {
        $user = $_POST['uname'];
        $password = $_POST['pswd'];

        $user = stripslashes($user);
        $password = stripslashes($password);

        $user = mysqli_real_escape_string($con, $user);
        $password = mysqli_real_escape_string($con, $password);

        $stmt = $con->prepare("SELECT * FROM login WHERE uname = ? AND pswd = ?");
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
            echo "<h2>Invalid username or password</h2>";
        }
    }
?>

