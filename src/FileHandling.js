var fileN = require('fs');

fileN.open('mynewfile.txt','w',function(err,file)
{
    if(err) throw err;
    console.log("Changes saved (open)!");
});

fileN.writeFile('mynewfile.txt','This is data inside of file : ',function(err)
{
    if(err) throw err;
    console.log('Written!');
});

fileN.appendFile('mynewfile.txt',"*Its a new day*!", function(err)
{
    if(err) throw err;
    console.log("Appended!");
});

fileN.readFile('mynewfile.txt',{encoding:'utf-8'},function(err,data)
{
    console.log(data);
});

/*fileN.rename('mynewfile.txt','justanotherfile.txt',function(err)
{
    if(err) throw err;
    console.log('Renamed!');
});*/

fileN.unlink('mynewfile.txt',function(err)
{
    if(err) throw err;
    console.log('Deleted!');
});