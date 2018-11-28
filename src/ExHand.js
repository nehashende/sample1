function ex()
{
    var usrInpt,m;
    m = document.getElementById("p1");
    usrInpt = document.getElementById("textCase").value;
    m.innerHTML = "";
    try
    {
        
        if(usrInpt == "")
            throw "Can't be empty!";

        else if(usrInpt == usrInpt.toUpperCase())
            throw "Please enter your name in lowercase!";
        
        else
            alert("Hello " + usrInpt +"!!");
    }
    catch(e)
    {
        m.innerHTML = e;
    }
}