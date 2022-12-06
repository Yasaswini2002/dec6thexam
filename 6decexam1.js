function printMode(a, n)
    {
        let max = Number.MIN_VALUE;
        for (let i = 0; i < a.length; i++)
        {
            max = Math.max(max, a[i]);
        }
        let t = max + 1;
        let count = new Array(t);
        for (let i = 0; i < t; i++)
            count[i] = 0;
        for (let i = 0; i < n; i++)
            count[a[i]]++;
        let mode = 0; 
        let k = count[0];
        for (let i = 1; i < t; i++) 
        {
            if (count[i] > k) 
            {
                k = count[i];
                mode = i;
            }
        }
        console.log( "mode = " + mode);
    }
 let a = [ 3,4,3,2,3,1,2,5,6,3 ];
 let n =a.length;
printMode(a, n);