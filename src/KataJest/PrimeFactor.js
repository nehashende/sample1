let num = function(numb)
{
    arr = [];
    var fact = 2;
    if(numb == 1)
        return null;

    else
    {
        while(numb >= fact)
        {
            if(numb % fact == 0)
            {
                arr.push(fact);
                numb = numb / fact;
            }
            else
                fact++;
        }
    }
    /* if(numb > 1)
    {
        return numb;
    } */
    return arr;
}

module.exports = {'num' : num}