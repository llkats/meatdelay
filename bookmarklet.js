javascript:(function(){;var%20numDependencies=0,loadedDependencies=0;function%20scriptLoaded()%7BloadedDependencies++;if(numDependencies===loadedDependencies)%7BafterDepsLoaded()%7D%7Dfunction%20afterDepsLoaded()%7B(function()%7Bvar%20WAITFORIT,num;var%20divstyles=%7Bwidth:%22300px%22,height:%22150px%22,backgroundColor:%22#fff%22,position:%22fixed%22,top:%22200px%22,left:%2250%25%22,marginLeft:%22-150px%22,border:%227px%20solid%20#f181ad%22,zIndex:%22100000%22%7D;var%20buttstyles=%7Bborder:%222px%20solid%20pink%22,background:%22white%22,color:%22#333%22,cursor:%22pointer%22,height:%2240px%22,fontSize:%2216px%22,margin:%227px%200%207px%207px%22,width:%2230%25%22%7D;var%20div=document.createElement(%22div%22);div.id=%22butts%22;var%20countdown=document.createElement(%22div%22);countdown.id=%22countdown%22;countdown.innerHTML=%22delay!%22;countdown.style.color=%22#f181ad%22;countdown.style.fontFamily=%22sans-serif%22;countdown.style.fontSize=%2272px%22;countdown.style.fontWeight=%22600%22;countdown.style.textAlign=%22center%22;var%20butt1=document.createElement(%22button%22);butt1.setAttribute(%22data-ms%22,%221%22);butt1.innerHTML=%221%20sec%22;var%20butt2=document.createElement(%22button%22);butt2.setAttribute(%22data-ms%22,%222%22);butt2.innerHTML=%222%20secs%22;var%20butt3=document.createElement(%22button%22);butt3.setAttribute(%22data-ms%22,%225%22);butt3.innerHTML=%225%20secs%22;var%20butts=%5Bbutt1,butt2,butt3%5D;var%20finalcountdown=function()%7Bvar%20elt=document.getElementById(%22countdown%22);if(elt.innerHTML===%22delay!%22)%7Bnum=elt.getAttribute(%22data-ms%22)%7Delse%7Bnum=parseInt(elt.innerHTML,10)%7Dif(num%3E0)%7Belt.innerHTML=num-1%7Delse%7Bwindow.clearTimeout(WAITFORIT);go()%7D%7D;var%20remove=function(e)%7Bif(e.keyCode==27)%7Bdocument.body.removeChild(document.getElementById(%22butts%22))%7Dwindow.removeEventListener(%22keydown%22,remove,false)%7D;var%20go=function()%7Bvar%20elem=document.querySelector(%22form%22);var%20event=new%20Event(%22submit%22);elem.dispatchEvent(event);document.body.removeChild(document.getElementById(%22butts%22))%7D;for(var%20i%20in%20divstyles)%7Bdiv.style%5Bi%5D=divstyles%5Bi%5D%7Dfor(var%20lol%20in%20butts)%7Bfor(var%20style%20in%20buttstyles)%7Bbutts%5Blol%5D.style%5Bstyle%5D=buttstyles%5Bstyle%5D%7Dbutts%5Blol%5D.addEventListener(%22click%22,function(e)%7Bvar%20d=document.getElementById(%22butts%22),bs=d.getElementsByTagName(%22button%22);for(butt%20in%20bs)%7Bif(bs%5Bbutt%5D!==undefined&&typeof%20bs%5Bbutt%5D===%22object%22)%7Bbs%5Bbutt%5D.style.display=%22none%22%7D%7Dvar%20time=e.target.getAttribute(%22data-ms%22);countdown.innerHTML=time;WAITFORIT=window.setInterval(function()%7Bfinalcountdown()%7D,1e3)%7D);div.appendChild(butts%5Blol%5D)%7Dwindow.addEventListener(%22keydown%22,remove,false);div.appendChild(countdown);document.body.appendChild(div)%7D)()%7DafterDepsLoaded();})()