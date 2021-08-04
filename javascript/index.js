

    function myFunction()
    {
        let x=document.getElementById('password').value;
        switch(x)
        {
            case "VAISHNAVI":
            document.getElementById('start').style.display="none";
            location.href='html/start.html';
            
            document.getElementById('content').style.display="none";
            break;
            default:
            document.getElementById('start').style.display="none";
            document.getElementById('show').style.display="block";
            document.getElementById('content').style.display="none";
            document.getElementById('content1').style.display="block";
            break;
        }
    }
    
    
    
