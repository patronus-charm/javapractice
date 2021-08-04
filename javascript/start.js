
function myFunction() {
    let bran=document.getElementById('branch').value;
let semes =document.getElementById('sem').value;
    if(semes=="first" && (bran=="CSE" || bran=="MTH" || bran=="CHE" || bran=="CE" || bran=="MSE"))
    document.getElementById('my').style.display="block";
}

function myCpi1() {
let mthg=document.getElementById("mth101grade").value;
let phyg=document.getElementById("phy103grade").value;
let escg=document.getElementById("esc101grade").value;
let hssg=document.getElementById("hssgrade").value;
let mth,phy,esc,hss;
if(mthg=='A')
mth=10*11;
else if(mthg=='B')
mth=8*11;
else if(mthg=='C')
mth=6*11;
else if(mthg=='D')
mth=4*11;
else if(mthg=='E'||mthg=='F')
mth=0;
else 
mth=11;
if(phyg=='A')
phy=10*11;
else if(phyg=='B')
phy=8*11;
else if(phyg=='C')
phy=6*11;
else if(phyg=='D')
phy=4*11;
else if(phyg=='E'||phyg=='F')
phy=0;
else 
phy=11;
if(escg=='A')
esc=10*14;
else if(escg=='B')
esc=8*14;
else if(escg=='C')
esc=6*14;
else if(escg=='D')
esc=4*14;
else if(escg=='E'||escg=='F')
esc=0;
else 
esc=14;
if(hssg=='A')
hss=10*9;
else if(hssg=='B')
hss=8*9;
else if(hssg=='C')
hss=6*9;
else if(hssg=='D')
hss=4*9;
else if(hssg=='E'||hssg=='F')
hss=0;
else 
hss=9;
let total=11+11+14+9;
if(hss==9)
{
    total-=9;
    hss=0;
}
if(phy==11)
{
    total-=11;
    phy=0;
}
if(mth==11)
{
    total-=11;
    mth=0;
}
if(esc==14)
{
    total-=14;
    esc=0;
}
let avg=(phy+esc+hss+mth)/total;
avg*=10;
avg=Math.round(avg);
avg/=10;
document.getElementById("print").style.display="block";
document.getElementById("calculate").style.display="inline";
document.getElementById("calculate").innerHTML=avg;
}