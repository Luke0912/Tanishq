import navbar from "/script/nav.js";
import {footer,amarshowplace} from '../script/footer.js'

let nav=document.getElementById('amarcont');
nav.innerHTML=navbar();

var adimg=[
{
    img:"https://www.tanishq.co.in/wps/wcm/connect/tanishq/1450b7e1-b2a7-4121-bf6d-d6625a367d1a/desktop/Women_DiamondActivation2500x950.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-1450b7e1-b2a7-4121-bf6d-d6625a367d1a-desktop-nVSUYQb&amp;impolicy=pqlow"
},
{
    img:"https://www.tanishq.co.in/wps/wcm/connect/tanishq/d025cc02-b997-4dd6-bb3b-1a2e1dab470f/desktop/Capsule_Banners_2500x950-min.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-d025cc02-b997-4dd6-bb3b-1a2e1dab470f-desktop-nUPJuU7&impolicy=pqlow"
},
{
    img:"https://www.tanishq.co.in/wps/wcm/connect/tanishq/85225563-39c7-4456-b4f2-4d3913202e18/desktop/DiamondActivationNew_2500x950.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-85225563-39c7-4456-b4f2-4d3913202e18-desktop-nVSUOxt&impolicy=pqlow"
},
{
    img:"https://www.tanishq.co.in/wps/wcm/connect/tanishq/e4adb38b-c02a-49ad-9754-362bdfb2004a/desktop/Tanishq_Showstopper_Banner_2500x950-min.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-e4adb38b-c02a-49ad-9754-362bdfb2004a-desktop-nTx1Zzz&amp;impolicy=pqlow"
}
], i=0

setInterval(()=>{
    if(i==4) i=0

    var imgdiv=document.getElementById('ad');
    ad.src=adimg[i].img
    i+=1
},1000)

var showfooter=document.getElementById('footer');
showfooter.innerHTML=footer()
