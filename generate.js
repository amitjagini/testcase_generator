var arr = true;
var dim = true;
var lim = true;
var charac = true;

function constraints()
{
    var data_type = document.getElementById("typ").value;
    if(data_type=='int' && lim)
    {
        document.getElementById("limits").style.display = 'inline';
        lim = false;
    }
    else if(data_type=='str' && charac)
    {
        document.getElementById("characters").style.display = 'inline';
        charac = false;
    }
}
function enterNum()
{
    if(arr && dim)
    {
        document.getElementById("arraybox").style.display = 'inline';
        // document.getElementById("arrlabel").style.width = '500px';
        // document.getElementById("arrinp").style.width = '500px';
        arr = false;
    }
}

function enterDim()
{
    if(arr && dim)
    {
        document.getElementById("matbox").style.display = 'block';
        dim = false;
    }
}

function generateCases()
{
    var tc_num = Number(document.getElementById("tc").value);
    var res_id = document.getElementById("result");
    var data_type = document.getElementById("typ").value;
    while(tc_num)
    {
        if(data_type=='int')
        {
            var mini = Number(document.getElementById("mini").value);
            var maxi = Number(document.getElementById("maxi").value);
            if(arr && dim)
            {
                var element = Math.floor(Math.random()*(maxi-mini) + mini);
                res_id.innerHTML+=element;
            }
            else if(!arr)
            {
                var len = Number(document.getElementById("arr").value);
                var l = Math.floor(Math.random()*len)+1;
                res_id.innerHTML+=l;
                res_id.innerHTML+='<br>';
                var i =0;
                while(i<l)
                {
                    
                    var element = Math.floor(Math.random()*(maxi-mini) + mini);
                    res_id.innerHTML+=element;
                    res_id.innerHTML+=' ';
                    i++;
                }
            }
            else
            {
                var ro = Number(document.getElementById("rows").value);
                var co = Number(document.getElementById("cols").value);
                var r = Math.floor(Math.random()*ro)+1;
                var c = Math.floor(Math.random()*co)+1;
                res_id.innerHTML+=r;
                res_id.innerHTML+=' ';
                res_id.innerHTML+=c;
                res_id.innerHTML+='<br>';
                for(var i=0;i<r;i++)
                {
                    for(var j=0;j<c;j++)
                    {
                        var element = Math.floor(Math.random()*(maxi-mini) + mini);
                        res_id.innerHTML+=element;
                        res_id.innerHTML+=' ';
                    }
                    res_id.innerHTML+='<br>';
                }
            }
        }
        else if(data_type=='str')
        {
            var lower = "abcdefghijklmnopqrstuvwxyz";
            var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var numbers = "1234567890";
            var lo = document.getElementById("lowercase").checked;
            var up = document.getElementById("uppercase").checked;
            var nu = document.getElementById("numbers").checked;
            var temp = '';
            if(lo) temp+=lower;
            if(up) temp+=upper;
            if(nu) temp+=numbers;
            var len = temp.length;
            var y = Number(document.getElementById("slen").value);
            var x = Math.floor(Math.random()*y + 1);
            var ans = '';
            if(arr)
            {
                for(var i=0;i<x;i++)
                {
                    var index = Math.floor(Math.random()*len);
                    ans+=temp.charAt(index);
                }
                res_id.innerHTML+=ans;
            }
            else
            {
                var len = Number(document.getElementById("arr").value);
                var l = Math.floor(Math.random()*len)+1;
                res_id.innerHTML+=l;
                res_id.innerHTML+='<br>';
                for(var j=0;j<l;j++)
                {
                    for(var i=0;i<x;i++)
                    {
                        var index = Math.floor(Math.random()*len);
                        ans+=temp.charAt(index);
                    }
                    res_id.innerHTML+=ans;
                    res_id.innerHTML+=' ';
                }
            }
        }
        res_id.innerHTML+='<br>';
        tc_num--;
    }
}

