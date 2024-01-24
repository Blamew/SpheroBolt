// Team Members: Bryson LaMew & Sean Gay
// Name: Bryson LaMew
// Date: 1.22.24
// Program: Maze
// Bolt ID: 33DF

//start message
async function startProgram(){
await speak("Start", true);	
await scrollMatrixText('Start', { r: 66, g: 66, b: 66 }, 75, true)    
//LED Blue + Movement
await roll(360, 75, 2)
await scrollMatrixText('BLUE LED', { r: 0, g: 0, b: 255 }, 75, true) ; await setFrontLed({ r: 0, g: 0, b: 255 }) ; await setBackLed({ r: 0, g: 0, b: 255 }) 
await setMainLed({ r: 0, g: 0, b: 255 })
}