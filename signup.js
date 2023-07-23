const signupForm=document.getElementById('signupForm');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const contact=document.getElementById('contact').value;
    const formData={
        username:username,
        email:email,
        password:password,
        contact:contact
    }
    fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Sign Up Successful',data);
        alert("You have signed up successfully!")
        window.location.href='login.html';

    })
    .catch(error=>{
        console.log("error",error);
    })
    
})