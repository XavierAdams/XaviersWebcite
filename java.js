var num = 9;
var string = "wenier"
var real = true;

var groceries = ['milk', 'eggs', 'plant', 'borat'];

document.getElementById('box').innerHTML = string;

if(num == 10)
{
    console.log('its 10');
}
else
{
    console.log('it aint 10');
}


function needs()
{
    for(var i=0; i<groceries.length;  i++)
        {
            console.log(groceries[i]);
         
        }
        
}


document.getElementById('box').addEventListener('click', function()
{
    needs();
    alert('im a touch you eli');
});