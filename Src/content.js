tommyhfd(document.body);

function tommyhfd(node){
	var papa, baby;
	switch(node.nodeType){
		case 1: //Check if this an element
		case 9: //Check if this is the document
		case 11:
			papa = node.firstChild;
			while(papa){
				baby = papa.nextSibling;
				tommyhfd(papa);
				papa = baby;
			}
			break;
		case 3:
			handleText(node);
			break;	
	}
}

function handleText(textNode){
	
	var text = textNode.nodeValue;
	text = text.replace(/\bdumplings\b/g, "Lil' Suprises");
	text = text.replace(/\bDumplings\b/g, "Lil' Suprises");
	text = text.replace(/\bNutella\b/g, "Bust-a-nut");
	text = text.replace(/\bnutella\b/g, "Bust-a-nut");
	text = text.replace(/\bCoffee\b/g, "Sippy Sippy Wake Wake");
	text = text.replace(/\bcoffee\b/g, "Sippy Sippy Wake Wake");
	text = text.replace(/\bFruit Loops\b/g, "Proud Cherios");
	text = text.replace(/\bfruit loops\b/g, "Proud Cherios");
	text = text.replace(/\bCoffee\b/g, "Sippy Sippy Wake Wake");
	text = text.replace(/\bpizza\b/g, "Gangsta Bread");
	text = text.replace(/\bPizza\b/g, "gangsta bread");
	text = text.replace(/\bShrimp\b/g, "Tiny Ass Lobster");
	text = text.replace(/\bshrimp\b/g, "Tiny Ass Lobster");
	text = text.replace(/\bgrapes\b/g, "Teen Raisins");
	text = text.replace(/\bKetchup\b/g, "Kanye blood");
	text = text.replace(/\bketchup\b/g, "Kanye blood");
	text = text.replace(/\bmilk\b/g, "Cereal shower");
	text = text.replace(/\bMilk\b/g, "Cereal shower");
	text = text.replace(/\bCookies\b/g, "Tiny ass cakes");
	text = text.replace(/\bcookies\b/g, "Tiny ass cakes");

	textNode.nodeValue = text;
	
}