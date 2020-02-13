function CharacterGame(str , char)
{

  var myindexes=[];
  for(var i=0;i<str.length;i++)
  {
      if(char==str[i])
      {
          myindexes.push(i);
      }
  }
  console.log(myindexes);

}