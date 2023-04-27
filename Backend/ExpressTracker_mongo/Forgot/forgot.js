async function forgot(event){
    event.preventDefault();
    try{
        const forgotDetails={
            email:event.target.email.value
        }

        await axios.post('http://localhost:4000/password/forgotpassword',forgotDetails);
        document.body.innerHTML+='Email sent successfully';
    }
    catch(err){
        document.body.innerHTML+=`<br><div style="color:red;">${err}</div`;
    }
}