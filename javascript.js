

function increment()
{
	var val = document.getElementById("number").value;
	v = Number(val);
	v = v+1;
	document.getElementById("number").value=String(v);
}

function decrement()
{
	var val = document.getElementById("number").value;
	v = Number(val);
	if(v>1)
	{
		v = v-1;
	}
	document.getElementById("number").value=String(v);
}

function swap()
{
	var a = document.getElementById("from").value;
	var b = document.getElementById("to").value;
	var c = "";
	c = a;
	a = b;
	b = c;
	document.getElementById("from").value=a;
	document.getElementById("to").value=b;
}

function search()
{
	var amount = 5000;
	var a = document.getElementById("from").value;
	var b = document.getElementById("to").value;
	var val = document.getElementById("number").value;
	value = Number(val);
	var tot = value*amount;
	alert("Your flight from "+a+" to "+b+" costed "+tot);
}

function show()
{
	var x=document.getElementById("returndate");
	x.setAttribute("type", "date");
}

function hide()
{
	var x = document.getElementById("returndate");
	x.setAttribute("type", "hidden");
}

function res()
{
	var selectBox = document.getElementById("journey");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue=="oneway")
    {
    	hide();
    }
    else
    {
    	show();
    }
}
