//This is a JavaScript file
// This program contains a map of translated words
// The program will ask the user to enter a word in English to translate into Klingon
// If the map has the translation the program will output the English word translated into Klingon
// If the map does not have the translation, the program will say so

let Kilingon_Map = new Map(); 
Kilingon_Map.set('this', 'Vam');
Kilingon_Map.set('translator', 'mugh');
Kilingon_Map.set('will' , 'gheor');
Kilingon_Map.set('help', 'QaH');
Kilingon_Map.set('you', 'SoH');
Kilingon_Map.set('speak', 'jatlh');
Kilingon_Map.set('to', 'ngeH');
Kilingon_Map.set('Klingon', 'Hhlngan');
Kilingon_Map.set('in', 'Daq');
Kilingon_Map.set('space', 'logh'); //creates map and sets keys and values


    translate= prompt('What English word would you like translated into Klingon?'); //asks user to enter English word
if (Kilingon_Map.has(translate)){
    console.log(`${translate} in Klingon is ${Kilingon_Map.get(translate)}`); //if the program has a key that matches the word put in, the program will output the English word translated into Klingon
}
else{
    console.log(`Sorry, we haven't translated ${translate} into Klingon yet.`); // if the English word does not match a key in the map the program will say that it doesn't have the translation yet
}