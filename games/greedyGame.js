function GreedyGame(number)
{
    var decimal=null;
    var dollar=parseInt(number);
    decimal=number - Math.floor(number);

    var quarter=decimal / 0.25;
    quarter=parseInt(quarter);

    decimal=decimal % 0.25; 
    var dim = decimal / 0.1;
    dim=parseInt(dim);

    decimal=decimal %0.1;
    var nickel=decimal / 0.05;
    nickel=parseInt(nickel);

    var cent =decimal %0.05 ;
    cent=cent*100;

    console.log(dollar + "dollar",quarter + "quarter" , +dim + "dim" , nickel +"nickel" , cent +"cent");
}