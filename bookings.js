const token=localStorage.getItem('token');
if(!token){
    alert("You Are Not Logged in");
    window.location.href='signin.html';
}
function logout(){
    const token=localStorage.getItem('token');
    if(token){
        localStorage.removeItem("token");
        alert("You Are Logged Out");
        window.location.href="index.html";
    }
    else{
        alert("Log In First");
        window.location.href="index.html";
    }
}