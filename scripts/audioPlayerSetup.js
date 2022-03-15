/* Each audio file that you play on this ASM site needs to be in the data structure below. The AmplitudeJS player then refers to it by index into that array, starting at 0. The index is given in the front matter for each project ('playerIdx') */


// Set up a callback (once full document is loaded) to init the AmplitudeJS audio player
document.addEventListener('DOMContentLoaded', (event) => {
  
  Amplitude.init({
      "volume": 70,
      "continue_next": false,
      "songs": [
        { /* playerIdx 0 is a dummy silent file */
          "url": "/audio/null.mp3"
        },
        { /* playerIdx 1 */
          "name": "War Horse",
          "url": "/projects/theatre/War_Horse/War_Horse_SR01.mp3"
        },
        { /* playerIdx 2 */
          "name": "Curious Incident",
          "url": "/projects/theatre/Curious_Incident/Curious_Incident_SR01.mp3"
        },
        { /* playerIdx 3 */
          "name": "Angels in America",
          "url": "/projects/theatre/Angels_In_America/Angels_In_America_SR01.mp3"
        },
        { /* playerIdx 4 */
          "name": "Coram Boy",
          "url": "/projects/theatre/Coram_Boy/Coram_Boy_SR01.mp3"
        },
        { /* playerIdx 5 */
          "name": "Semmelweis",
          "url": "/projects/theatre/Semmelweis/Semmelweis_Showreel.mp3"
        },
        { /* playerIdx 6 */
          "name": "Cyrano",
          "url": "/projects/theatre/Cyrano/Cyrano_SR01.mp3"
        },
        { /* playerIdx 7 */
          "name": "Husbands and Sons",
          "url": "/projects/theatre/Husbands_And_Sons/Husbands_And_Sons_SR01.mp3"
        },
        { /* playerIdx 8 */
          "name": "Revengers Tragedy",
          "url": "/projects/theatre/Revengers_Tragedy/Revengers_Tragedy_SR01.mp3"
        },
        { /* playerIdx 9 */
          "name": "Nation",
          "url": "/projects/theatre/Nation/Nation_SR01.mp3"
        },
        { /* playerIdx 10 */
          "name": "Rules For Living",
          "url": "/projects/theatre/Rules_For_Living/Rules_For_Living_SR01.mp3"
        },
        { /* playerIdx 11 */
          "name": "War Horse In Concert",
          "url": "/projects/orchestral/WHIC/WHIC_SR01.mp3"
        },
        { /* playerIdx 12 */
          "name": "A Fist Full of Fives",
          "url": "/projects/orchestral/A_Fist_Full_of_Fives/FFo5s_SR01.mp3"
        },
        { /* playerIdx 13 */
          "name": "War Horse Suite",
          "url": "/projects/orchestral/War_Horse_Suite/WHSuite_SR01.mp3"
        },
        { /* playerIdx 14 */
          "name": "Some See Us",
          "url": "/projects/orchestral/Some_See_Us/Some_See_Us_SR01.mp3"
        },
        { /* playerIdx 15 */
          "name": "Griffin and the Grail",
          "url": "/projects/orchestral/The_Griffin_And_The_Grail/Griffin_And_The_Grail_SR01.mp3"
        },
        { /* playerIdx 16 */
          "name": "Sinfonietta",
          "url": "/projects/orchestral/Sinfonietta/Sinfonietta_SR01.mp3"
        },
        { /* playerIdx 17 */
          "name": "Spring Masque",
          "url": "/projects/chamber/Spring_Masque/SpringMasque-01.mp3"
        },
        { /* playerIdx 18 */
          "name": "Arpeggiare Variations",
          "url": "/projects/chamber/Arpeggiare_Variations/Arpeggiare_Vars_SR01.mp3"
        },
        { /* playerIdx 19 */
          "name": "Blackheath Crosslight",
          "url": "/projects/chamber/Blackheath_Crosslight/Blackheath_Crosslight.mp3"
        },
      ]
    });

});