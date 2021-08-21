
let form = document.getElementById("form");
form.addEventListener('submit',function(event){
    event.preventDefault();

    let fname = document.getElementById("inputFname").value;
    let lname = document.getElementById("inputLname").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let addr1 = document.getElementById("inputAddress").value;
    let addr2 = document.getElementById("inputAddress2").value;
    let city = document.getElementById("inputCity").value;
    let state = document.getElementById("inputState").value;
    let zip = document.getElementById("inputZip").value;
    let checkbox = document.getElementById("gridCheck").value;

    console.log(fname)
    console.log(lname)
    console.log(email)
    console.log(password)
    console.log(addr1)
    console.log(addr2)
    console.log(city)
    console.log(state)
    console.log(zip)
    console.log(checkbox)

    // let data = [fname,lname,email,password,addr1,addr2,city,state,zip,checkbox];
    let data = {fname,lname,email,password,addr1,addr2,city,state,zip,checkbox};
    console.log(data);

    let req = $.ajax({
        // url:"https://jsonplaceholder.typicode.com/todos/posts",
        url:"https://reqres.in/api/users",
        method:"POST",
        data: JSON.stringify(data),
        success: function(data){
            console.log("data send "+data); 
        }
    })
    req.done(function(msg,textStatus,resinfo){
        console.log("done "+textStatus+resinfo.status);
    })
    req.fail(function(jqxHR,textStatus){
        alert("req fail "+textStatus)
    })
    req.always(function(jqXHR,textStatus){
        console.log("always run this block "+textStatus);
    })
})
