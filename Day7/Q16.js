/** Q16 
	 *  This program uses a switch statement to examine the value of a 
	 char-type variable called colour and prints one of the following
	 messages, depending on the character assigned:
		RED if either r or R is assigned to colour.
		GREEN if either g or G is assigned to colour.
		BLUE if either b or B is assigned to colour.
		BLACK if any other character is assigned to colour.
		
		Problem Flow:
		Prompt the user to enter a single character for the color code.
		Use a switch statement to check the character and assign the corresponding color.
		Print the entered color code and the corresponding color name.

		Sample Input / Output:
		Input:
		Enter Color code character: g
		Output:
		Color Code g is GREEN

	 */
    let color=prompt("enter a code");
    switch (color) {
        case 'r':
        case 'R':
            {
             console.log("color code",color, "is red");
             break;
            }
            case 'b':
            case 'B':

                {
                   console.log("color code",color, "is blue"); 
                   break;
                }
                case 'g':
                case 'G':
                    {
                        console.log("color code",color,"is green");
                        break;
                    }

    

                    default:
                    console.log("assign to correct color");
    }