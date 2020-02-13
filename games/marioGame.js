function MarioGame(number)
{
    var str;
    for(i=1;i<=number;i++)
    {
        str="";
        for(j=number-i;j>=0;j--)
        {
            str+=(" ");
        }

        for(k=1;k<=i;k++)
        {
            str+=("*");
        }
        console.log(str + "\n");
    }
}