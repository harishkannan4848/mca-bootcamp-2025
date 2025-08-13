 /** Q14
	 *  This program will read a line of text from the user, analyze 
	 each character, and count how many are letters, digits, whitespace, 
	 or other types of characters (like punctuation).
	 
	 Problem Flow:
	Prompt the user to input a line of text.
	Initialize counters for letters, digits, spaces, and other characters.
	Loop through each character and classify it into one of the categories.
	Display the count for each category: letters, digits, spaces, and others.

	Sample Input / Output:
	Input:
	Enter the text below:
	Hello World! 123

	Output:
	Letters : 10
	Digits : 3
	Space Chars : 2
	Others : 2

	 */

let txt=prompt("enter the text");
let letters=0,digits=0,spaces=0,others=0;
for(let i=0;i<txt.length;i++)
{
    let ch=txt[i];
    if((ch>='A'&&ch<='Z')||(ch>='a' &&ch<='z'))
    {
        letters++;

    }
else if(ch>='0'&&ch<='9')
{
    digits++;

}
    else if(ch===' ')
    {
        spaces++;
    }
    else {
        others++;
    }
}
console.log("letters:",letters);
console.log("digits:",digits);
console.log("spaces:",spaces);
console.log("others:",others);

 
