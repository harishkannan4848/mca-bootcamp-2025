/** Q17
	 *  This program checks the temperature value (temp) and determines 
	 the physical state of water:
		If temp < 0 → "ICE"
		If temp is between 0 and 100 (inclusive) → "WATER"
		If temp > 100 → "STEAM"
		
		Flow Summary:
		Get user input for temperature
		Use if-else to decide the state of water
		Display the result to the user
		
		Sample I/O:
		Input:
		Enter the water temperature: 120
		Output:
		Water status is STEAM for the Temperature 120.00

	 */
let temp=parseFloat(prompt("enter the water temperature"));
if(temp<0)
{
    console.log("water temperature status is ice ");
    
}
else if(temp>=0 && temp<=100)
{
    console.log("water tempearture status is water");
    
}
else if(temp>100)
{
    console.log("water temperature status is steam");
    
}
else{
    console.log("invalid");
    

}