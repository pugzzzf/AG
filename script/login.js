const param = new URLSearchParams(window.location.search);

if (param.has('error'))
{
    document.getElementById('error').textContent = "Invalid username or password"
}