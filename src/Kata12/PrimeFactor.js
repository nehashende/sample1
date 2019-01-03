const number = (numb) =>
{
    arr = []
    fact = 2

    if(numb == 1)
        return null

    while(numb > fact)
    {
        if(numb % fact == 0)
        {
            arr.push(fact)
            numb /= fact
        }
        else fact++
    }

    if(numb > 1)
        arr.push(numb)

    return arr
}

module.exports = {number}