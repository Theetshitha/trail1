"use strict"

var n=null;

var div1=document.createElement('form');
div1.id='div_form';

var p_tag1=document.createElement('p');
p_tag1.id='p1';
p_tag1.innerText='PRODUCT CODE';

var input1=document.createElement('input');
input1.id='p_code';
input1.setAttribute('required', '')

var p_tag2=document.createElement('p');
p_tag2.id='p2';
p_tag2.innerText='PRODUCT NAME';

var input2=document.createElement('input');
input2.id='p_name';
input2.setAttribute('required', '')

var p_tag3=document.createElement('p');
p_tag3.id='p3';
p_tag3.innerText='PRODUCT QTY';

var input3=document.createElement('input');
input3.id='p_qty';
input3.setAttribute('required', '')

var p_tag4=document.createElement('p');
p_tag4.id='p4';
p_tag4.innerText='PRODUCT PRICE';

var input4=document.createElement('input');
input4.id='p_price';
input4.setAttribute('required', '')

var p_tag5=document.createElement('p');
p_tag5.id='p5';
p_tag5.innerText='';

var btn1=document.createElement('button');
btn1.innerText='SUBMIT';
btn1.id='submit';


var btn2=document.createElement('button');
btn2.innerText='RESET';
btn2.id='reset';



var div2=document.createElement('div');
div2.id='div_table';

var table1=document.createElement('table');
table1.id='tab';

var th1=document.createElement('th');
th1.id='th_code';
th1.innerText='P_CODE';

var th2=document.createElement('th');
th2.id='th_name';
th2.innerText='P_NAME';

var th3=document.createElement('th');
th3.id='th_qty';
th3.innerText='P_QTY';

var th4=document.createElement('th');
th4.id='th_price';
th4.innerText='P_PRICE';

var th5=document.createElement('th');
th5.id='actions';
th5.innerText='ACTIONS';




btn1.addEventListener('click', tableContent);

btn2.addEventListener('click',resetContent);

function tableContent(){

    console.log("ddd")
if(n==null)
{
    // if( input1.value==""||input2.value==""||input3.value==""||input4.value==""){
    //     alert("Fill all columns");
    // }
    // else{
    // if(input1==true || input2==true|| input3==true|| input4==true){
        // 
        var tr1=document.createElement('tr');
        tr1.id='table_row1';
    
        var td1=document.createElement('td');
        td1.id='table_data1';
        td1.innerText=input1.value;
        
        var td2=document.createElement('td');
        td2.id='table_data2';
        td2.innerText=input2.value;
    
        var td3=document.createElement('td');
        td3.id='table_data3';
        td3.innerText=input3.value;
        
        var td4=document.createElement('td');
        td4.id='table_data4';
        td4.innerText=input4.value;
    
        var td5=document.createElement('td');
        td5.id='table_data5';
        // td5.innerText=input4.value;
    
        
        var btn3=document.createElement('button');
        btn3.innerText='EDIT';
        btn3.id='edit';
    
        var btn4=document.createElement('button');
        btn4.innerText='DELETE';
        btn4.id='delete';
    
        table1.append(tr1);
        tr1.append(td1,td2,td3,td4,btn3,btn4);
    
        input1.value="";
        input2.value="";
        input3.value="";
        input4.value="";
    
        
        btn4.addEventListener('click',deleteContent);
    
        btn3.addEventListener('click',function(){
            editContent(this);
        })
    
        function deleteContent(){
            btn4.parentElement.remove();
        }
    
    // }
    }
   else{
    editNew()
}

function editContent(e)
{
    n=e.parentElement.childNodes;
    input1.value=n[0].innerHTML;
    input2.value=n[1].innerHTML;
    input3.value=n[2].innerHTML;
    input4.value=n[3].innerHTML;
 
}
function editNew(){
    n[0].innerHTML=input1.value;
    n[1].innerHTML=input2.value;
    n[2].innerHTML=input3.value;
    n[3].innerHTML=input4.value;
    input1.value="";
    input2.value="";
    input3.value="";
    input4.value="";
    n=null;

}
}

function resetContent(){
   
    input1.value="";
    input2.value="";
    input3.value="";
    input4.value="";
 
}

document.body.append(div1);

div1.append(p_tag1,input1,p_tag2,input2,p_tag3,input3,p_tag4,input4,p_tag5,btn1,btn2);

document.body.append(div2);

div2.append(table1);
table1.append(th1,th2,th3,th4,th5);