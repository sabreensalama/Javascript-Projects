
function BottleGame()
{
    myarray=["sabreen","samar","ahmed","islam","Sandra","tina"];
    var firstIndex= Math.round(Math.random() * myarray.length);
    var secondIndex= Math.round(Math.random() * myarray.length);

    if(firstIndex!=secondIndex)
    {
        console.log(myarray[firstIndex],myarray[secondIndex]);
    }
}