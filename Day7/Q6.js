/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
	 */

    let mark1=Number(prompt("enter your.mark"));
    let mark2=Number(prompt("enter your mark"));
    let mark3=Number(prompt("enter your mark"));  
    let total=(mark1+mark2+mark3);
    let avg=total/3.0;
    console.log("total marks is",total);
    console.log("average marks is",avg);