//Programmer: Bryson LaMew
//Date: 1.18.2024
//Program: Sphero Bolt Testir
//Bolt ID: 

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
*/

// Square w/ different colors for each line
	async function startProgram() {
	setMainLed({r:255,g:0,b:0})
	await roll(90,25,2)
	setMainLed({r:128,g:0,b:128})
	await roll(180,25,2)
	setMainLed({r:137,g:240,b:207})
	await roll(270,25,2)
	setMainLed({r:255,g:105,b:180})
	await roll(360,25,2)
	}






// Square w/ different colors and Sounds for each line





/*
// Figure 8
 setSpeed(2)
 await spin(360)
 await spin(360)
*/