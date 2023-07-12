/* Each audio file that you play on this ASM site needs to be in the data structure below. The AmplitudeJS player then refers to it by index into that array, starting at 0. The index is given in the front matter for each project ('playerIdx') */


// Set up a callback (once full document is loaded) to init the AmplitudeJS audio player
document.addEventListener('DOMContentLoaded', (event) => {
  
  Amplitude.init({
      "volume": 70,
      "continue_next": false,
      "songs": [
        {
            "playerIdx": 0,
            "name": "null",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 1,
            "name": "War Horse example",
            "details": "",
            "url": "/projects/theatre/War_Horse/audio/War_Horse_SR01.mp3"
        },
        {
            "playerIdx": 2,
            "name": "Curious Incident",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/projects/theatre/Curious_Incident/audio/Curious_Incident_SR01.mp3"
        },
        {
            "playerIdx": 3,
            "name": "Angels in America",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/projects/theatre/Angels_In_America/audio/Angels_In_America_SR01.mp3"
        },
        { 
            "playerIdx": 4,
            "name": "Coram Boy",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/projects/theatre/Coram_Boy/audio/Coram_Boy_SR01.mp3"
        },
        { 
            "playerIdx": 5,
            "name": "Semmelweis",
            "details": "Played by Salomé Quartet. Written/prod. Adrian Sutton",
            "url": "/projects/theatre/Semmelweis/audio/Semmelweis_Showreel.mp3"
        },
        { 
            "playerIdx": 6,
            "name": "Cyrano",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/projects/theatre/Cyrano/audio/Cyrano_SR01.mp3"
        },
        {
            "playerIdx": 7,
            "name": "Husbands and Sons",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/projects/theatre/Husbands_And_Sons/audio/Husbands_And_Sons_SR01.mp3"
        },
        {
            "playerIdx": 8,
            "name": "Revengers Tragedy",
            "details": "Written/prod. Adrian Sutton",
            "url": "/projects/theatre/Revengers_Tragedy/audio/Revengers_Tragedy_SR01.mp3"
        },
        {
            "playerIdx": 9,
            "name": "Nation",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/projects/theatre/Nation/audio/Nation_SR01.mp3"
        },
        {
            "playerIdx": 10,
            "name": "Rules For Living",
            "details": "Clarinets/soprano sax: Simon Harem. Written/prod. Adrian Sutton",
            "url": "/projects/theatre/Rules_For_Living/audio/Rules_For_Living_SR01.mp3"
        },
        { 
            "playerIdx": 11,
            "name": "War Horse In Concert",
            "details": "",
            "url": "/projects/orchestral/War_Horse_The_Story_in_Concert/audio/WHIC_SR01.mp3"
        },
        { 
            "playerIdx": 12,
            "name": "A Fist Full of Fives",
            "details": "",
            "url": "/projects/orchestral/A_Fist_Full_of_Fives/audio/FFo5s_SR01.mp3"
        },
        { 
            "playerIdx": 13,
            "name": "War Horse Suite",
            "details": "",
            "url": "/projects/orchestral/War_Horse_Suite/audio/WHSuite_SR01.mp3"
        },
        { 
            "playerIdx": 14,
            "name": "Some See Us",
            "details": "",
            "url": "/projects/orchestral/Some_See_Us/audio/Some_See_Us_SR01.mp3"
        },
        { 
            "playerIdx": 15,
            "name": "Griffin and the Grail",
            "details": "",
            "url": "/projects/orchestral/The_Griffin_and_the_Grail/audio/Griffin_And_The_Grail_SR01.mp3"
        },
        { 
            "playerIdx": 16,
            "details": "",
            "name": "Sinfonietta",
            "url": "/projects/orchestral/Sinfonietta/audio/Sinfonietta_SR01.mp3"
        },
        { 
            "playerIdx": 17,
            "name": "Spring Masque",
            "details": "",
            "url": "/projects/chamber/Spring_Masque/audio/SpringMasque-01.mp3"
        },
        { 
            "playerIdx": 18,
            "name": "Arpeggiare Variations",
            "details": "",
            "url": "/projects/chamber/Arpeggiare_Variations/audio/Arpeggiare_Vars_SR01.mp3"
        },
        { 
            "playerIdx": 19,
            "name": "Blackheath Crosslight",
            "details": "Written/prod. Adrian Sutton",
            "url": "/projects/chamber/Blackheath_Crosslight/audio/Blackheath_Crosslight.mp3"
        },
        { 
            "playerIdx": 20,
            "name": "MOTOE",
            "details": "",
            "url": "/projects/theatre/MOTOE/audio/MOTOE The dining car.mp3"
        },
        { 
            "playerIdx": 21,
            "name": "WH Opening",
            "details": "",
            "url": "/projects/theatre/War_Horse/audio/War_Horse_opening.mp3"
        },
        { 
            "playerIdx": 22,
            "name": "WH Scarlet extract",
            "details": "",
            "url": "/projects/theatre/War_Horse/audio/War_Horse_Scarlet_extract.mp3"
        },
        {
            "playerIdx": 23,
            "name": "WH 2nd charge extract",
            "details": "",
            "url": "/projects/theatre/War_Horse/audio/War_Horse_2nd_charge_extract.mp3"
        },
        { 
            "playerIdx": 24,
            "name": "Bicycle Dance",
            "details": "",
            "url": "/projects/chamber/Bicycle Dance in Lanes of Leaves and Light/audio/Bicycle Dance.mp3"
        },
        { 
            "playerIdx": 25,
            "name": "AOLW",
            "details": "",
            "url": "/projects/chamber/Aerobatics_Over_Lake_Wanaka/audio/AOLW.mp3"
        },
        { 
            "playerIdx": 26,
            "name": "Devon at Peace",
            "details": "Royal Philharmonic Orchestra, cond. David Angus",
            "url": "/audio/showreel/SR001 War Horse - Devon At Peace.mp3"
        },
        { 
            "playerIdx": 27,
            "name": "A Fist Full of Fives",
            "details": "BBC Symphony Orchestra, cond. Michael Seal",
            "url": "/audio/showreel/SR002 A Fist Full of Fives.mp3"
        },
        { 
            "playerIdx": 28,
            "name": "First Gallop",
            "details": "Royal Philharmonic Orchestra, cond. David Angus",
            "url": "/audio/showreel/SR003 War Horse - First Gallop.mp3"
        },
        { 
            "playerIdx": 29,
            "name": "At Night in the Darkness",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR004 Murder on the Orient Express - At Night in the Darkness.mp3"
        },
        { 
            "playerIdx": 30,
            "name": "2nd charge",
            "details": "Royal Philharmonic Orchestra, cond. David Angus",
            "url": "/audio/showreel/SR005 War Horse - 2nd charge.mp3"
        },
        { 
            "playerIdx": 31,
            "name": "Emilie's Theme",
            "details": "Royal Philharmonic Orchestra, cond. David Angus",
            "url": "/audio/showreel/SR006 War Horse - Emilie's theme.mp3"
        },
        { 
            "playerIdx": 32,
            "name": "The Dining Car",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR007 Murder on the Orient Express - The dining car.mp3"
        },
        { 
            "playerIdx": 33,
            "name": "Very Nasty Indeed",
            "details": "Royal Philharmonic Orchestra, cond. David Angus",
            "url": "/audio/showreel/SR008 War Horse - Very Nasty Indeed.mp3"
        },
        { 
            "playerIdx": 34,
            "name": "The Journey Begins",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR009 Murder on the Orient Express - The journey begins.mp3"
        },
        { 
            "playerIdx": 35,
            "name": "Into The Crater",
            "details": "Royal Philharmonic Orchestra, cond. David Angus",
            "url": "/audio/showreel/SR010 War Horse - Into the Crater.mp3"
        },
        { 
            "playerIdx": 36,
            "name": "Sonnenschein",
            "details": "Royal Philharmonic Orchestra, cond. David Angus",
            "url": "/audio/showreel/SR011 War Horse - Sonnenschein.mp3"
        },
        { 
            "playerIdx": 37,
            "name": "Husbands and Sons",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR012 Husbands and Sons.mp3"
        },
        { 
            "playerIdx": 38,
            "name": "Spring Masque",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR013 Spring Masque.mp3"
        },
        { 
            "playerIdx": 39,
            "name": "Maths Appendix",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR014 Maths Appendix.mp3"
        },
        { 
            "playerIdx": 40,
            "name": "Semmelweis",
            "details": "Perf. Salome Quartet",
            "url": "/audio/showreel/SR015 Semmelweis.mp3"
        },
        { 
            "playerIdx": 41,
            "name": "Eulogy",
            "details": "Vln: Fenella Humphreys, prod. Adrian Sutton",
            "url": "/audio/showreel/SR016 Eulogy.mp3"
        },
        { 
            "playerIdx": 42,
            "name": "A Stream Through Terrain",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR017 A Stream through Terrain.mp3"
        },
        { 
            "playerIdx": 43,
            "name": "New Sails",
            "details": "Vln: Fenella Humphreys, written/prod. Adrian Sutton",
            "url": "/audio/showreel/SR018 New Sails.mp3"
        },
        { 
            "playerIdx": 44,
            "name": "Station",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR019 Station.mp3"
        },
        { 
            "playerIdx": 45,
            "name": "Enchanted Island",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR020 Enchanted Island.mp3"
        },
        { 
            "playerIdx": 46,
            "name": "Creation Myth",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR021 Creation Myth.mp3"
        },
        { 
            "playerIdx": 47,
            "name": "Lunaluma",
            "details": "Vln: Fenella Humphreys, written/prod. Adrian Sutton",
            "url": "/audio/showreel/SR022 Lunaluma.mp3"
        },
        { 
            "playerIdx": 48,
            "name": "Blackheath Crosslight",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR023 Blackheath Crosslight.mp3"
        },
        { 
            "playerIdx": 49,
            "name": "Homeless on the Coast",
            "details": "Vln: Fenella Humphreys, written/prod. Adrian Sutton",
            "url": "/audio/showreel/SR024 Homeless on the Coast.mp3"
        },
        { 
            "playerIdx": 50,
            "name": "Polperro Beach",
            "details": "Written/played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR025 Polperro Beach.mp3"
        },
        { 
            "playerIdx": 51,
            "name": "Johnny",
            "details": "Played/prod. Adrian Sutton",
            "url": "/audio/showreel/SR026 Johnny.mp3"
        },
        { 
            "playerIdx": 52,
            "name": "AiA Jazz",
            "details": "Clarinet: Alan Barnes",
            "url": "/projects/theatre/Angels_In_America/audio/AiA Jazz SC38.mp3"
        },
        { 
            "playerIdx": 53,
            "name": "New Orleans Nightfall",
            "details": "Trumpet: Paul Higgs",
            "url": "/audio/showreel/SR027 AiA Jazz SC32.mp3"
        },
        { 
            "playerIdx": 54,
            "name": "Sleepwalking",
            "details": "Vln: Fenella Humphreys, written/prod. Adrian Sutton",
            "url": "/audio/showreel/SR028 Sleepwalking HC.mp3"
        },
        { 
            "playerIdx": 55,
            "name": "Violin concerto",
            "details": "",
            "url": "/audio/private/P0038 Violin concerto QEH 28 June Fenella Humphreys RPO.mp3"
        }
      ]
    });

});