function GameWho()
{
 var fly;
 fly=confirm("Do you Fly?");
 if(fly)
 {
     var wild=confirm("Are you Wild?");
     if(wild)
     {
         console.log("EAGLE");
     }else
     {
         console.log("Parrot");
     }

 }else{
var sea=confirm("Do you live under sea?")
if(sea)
{
    var wild=confirm("Are you Wild?");
    if(wild)
    {
        console.log("Shark");
    }else{
        console.log("Dolphin");
    }
}else{
    var wild=confirm ("Are you wild?");
    if(wild)
    {
        console.log("lion");
    }else{
        console.log("Cat");
    }

}

 }


}