#!/usr/bin/env node

var fs = require('fs');

var prime = "Primes.txt";

var n,j,c,Wanted=0; 

fs.appendFileSync(prime,2);

for(n=2;;n++)
{
    //console.log('%d',Wanted);
    for(j=1; j<=n; j++)
    {
	//check the numbers of primes..
	if( n%j === 0)
	    c++;
     	    
    }
    if(c == 2)
    {
	fs.appendFileSync(prime,'\n');
        fs.appendFileSync(prime,n);
	//console.log('This\'s Prime: %d', n);
	Wanted++;
    }
    c = 0 ;
    if(Wanted == 100)
	break;
}