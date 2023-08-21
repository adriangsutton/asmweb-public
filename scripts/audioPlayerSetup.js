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
            "name": "Aerobatics Over Lake Wanaka",
            "details": "",
            "url": "/works/P0001/audio/P0001.mp3"
        },
        {
            "playerIdx": 2,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 3,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 4,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 5,
            "name": "Paxo Tango",
            "details": "",
            "url": "/works/P0005/audio/P0005.mp3"
        },
        {
            "playerIdx": 6,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 7,
            "name": "Coram Boy",
            "details": "",
            "url": "/works/P0007/audio/P0007.mp3"
        },
        {
            "playerIdx": 8,
            "name": "War Horse",
            "details": "",
            "url": "/works/P0008/audio/P0008.mp3"
        },
        {
            "playerIdx": 9,
            "name": "The Revenger's Tragedy",
            "details": "",
            "url": "/works/P0009/audio/P0009.mp3"
        },
        {
            "playerIdx": 10,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 11,
            "name": "Nostalgium",
            "details": "",
            "url": "/works/P0011/audio/P0011.mp3"
        },
        {
            "playerIdx": 12,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 13,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 14,
            "name": "Spring Masque",
            "details": "",
            "url": "/works/P0014/audio/P0014.mp3"
        },
        {
            "playerIdx": 15,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 16,
            "name": "Curious Incident",
            "details": "",
            "url": "/works/P0016/audio/P0016.mp3"
        },
        {
            "playerIdx": 17,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 18,
            "name": "The Griffin And The Grail",
            "details": "",
            "url": "/works/P0018/audio/P0018.mp3"
        },
        {
            "playerIdx": 19,
            "name": "Some See Us",
            "details": "",
            "url": "/works/P0019/audio/P0019.mp3"
        },
        {
            "playerIdx": 20,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 21,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 22,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 23,
            "name": "Arpeggiare Variations",
            "details": "",
            "url": "/works/P0023/audio/P0023.mp3"
        },
        {
            "playerIdx": 24,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 25,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 26,
            "name": "A Fist Full Of Fives",
            "details": "",
            "url": "/works/P0026/audio/P0026.mp3"
        },
        {
            "playerIdx": 27,
            "name": "War Horse The Story In Concert",
            "details": "",
            "url": "/works/P0027/audio/P0027.mp3"
        },
        {
            "playerIdx": 28,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 29,
            "name": "Angels in America",
            "details": "",
            "url": "/works/P0029/audio/P0029.mp3"
        },
        {
            "playerIdx": 30,
            "name": "Eulogy",
            "details": "",
            "url": "/works/P0030/audio/P0030.mp3"
        },
        {
            "playerIdx": 31,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 32,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 33,
            "name": "Kensington Fanfare",
            "details": "",
            "url": "/works/P0033/audio/P0033.mp3"
        },
        {
            "playerIdx": 34,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 35,
            "name": "Trio Dances",
            "details": "",
            "url": "/works/P0035/audio/P0035.mp3"
        },
        {
            "playerIdx": 36,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 37,
            "name": "Blackheath Crosslight",
            "details": "",
            "url": "/works/P0037/audio/P0037.mp3"
        },
        {
            "playerIdx": 38,
            "name": "Violin concerto",
            "details": "",
            "url": "/works/P0038/audio/P0038.mp3"
        },
        {
            "playerIdx": 39,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 40,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 41,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 42,
            "name": "Sap and Sinews",
            "details": "",
            "url": "/works/P0042/audio/P0042.mp3"
        },
        {
            "playerIdx": 43,
            "name": "Consolation",
            "details": "",
            "url": "/works/P0043/audio/P0043.mp3"
        },
        {
            "playerIdx": 44,
            "name": "Dr. Semmelweis",
            "details": "",
            "url": "/works/P0044/audio/P0044.mp3"
        },
        {
            "playerIdx": 45,
            "name": "Murder On The Orient Express",
            "details": "",
            "url": "/works/P0045/audio/P0045.mp3"
        },
        {
            "playerIdx": 46,
            "name": "Short Story",
            "details": "",
            "url": "/works/P0046/audio/P0046.mp3"
        },
        {
            "playerIdx": 47,
            "name": "Intermezzo",
            "details": "",
            "url": "/works/P0047/audio/P0047.mp3"
        },
        {
            "playerIdx": 48,
            "name": "Polperro Beach",
            "details": "",
            "url": "/works/P0048/audio/P0048.mp3"
        },
        {
            "playerIdx": 49,
            "name": "War Horse Orchestral Suite",
            "details": "",
            "url": "/works/P0049/audio/P0049.mp3"
        },
        {
            "playerIdx": 50,
            "name": "Not Norwegian Dance",
            "details": "",
            "url": "/works/P0050/audio/P0050.mp3"
        },
        {
            "playerIdx": 51,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 52,
            "name": "Bicycle Dance",
            "details": "",
            "url": "/works/P0052/audio/P0052.mp3"
        },
        {
            "playerIdx": 53,
            "name": "Gigue from Coram Boy",
            "details": "",
            "url": "/works/P0053/audio/P0053.mp3"
        },
        {
            "playerIdx": 54,
            "name": "Dr Semmelweis",
            "details": "",
            "url": "/works/P0054/audio/P0054.mp3"
        },
        {
            "playerIdx": 55,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 56,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 57,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 58,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 59,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 60,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 61,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 62,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 63,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 64,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 65,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 66,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 67,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 68,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 69,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 70,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 71,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 72,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 73,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 74,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 75,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 76,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 77,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 78,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 79,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 80,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 81,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 82,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 83,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 84,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 85,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 86,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 87,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 88,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 89,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 90,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 91,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 92,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 93,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 94,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 95,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 96,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 97,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 98,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 99,
            "name": "<blank>",
            "details": "",
            "url": "/audio/null.mp3"
        },
        {
            "playerIdx": 100,
            "name": "P0038 Violin concerto full",
            "details": "",
            "url": "/hidden/P0038 Violin Concerto/P0038 full.mp3"
        },
        {
            "playerIdx": 101,
            "name": "P0014 Spring Masque full",
            "details": "",
            "url": "/hidden/P0014 Spring Masque/P0014 full.mp3"
        },
        {
            "playerIdx": 102,
            "name": "P0026 Ffo5s full",
            "details": "",
            "url": "/hidden/P0026 A Fist Full Of Fives/P0026 full.mp3"
        },
        {
            "playerIdx": 103,
            "name": "P0046 Short Story full",
            "details": "",
            "url": "/hidden/P0046 Short Story/P0046 full.mp3"
        },
        {
            "playerIdx": 104,
            "name": "Intermezzo",
            "details": "",
            "url": "/hidden/Orchestral Miniatures/P0047 Intermezzo.mp3"
        },
        {
            "playerIdx": 105,
            "name": "Polperro Beach (from Curious Incident)",
            "details": "",
            "url": "/hidden/Orchestral Miniatures/P0048 Polperro Beach.mp3"
        },
        {
            "playerIdx": 106,
            "name": "Not Norwegian Dance",
            "details": "",
            "url": "/hidden/Orchestral Miniatures/P0050 Not Norwegian Dance.mp3"
        },
        {
            "playerIdx": 107,
            "name": "Gigue (from Coram Boy)",
            "details": "",
            "url": "/hidden/Orchestral Miniatures/P0053 Gigue from Coram Boy.mp3"
        },
        {
            "playerIdx": 108,
            "name": "Dr Semmelweis",
            "details": "",
            "url": "/hidden/Orchestral Miniatures/P0054 Dr Semmelweis.mp3"
        },
        {
            "playerIdx": 109,
            "name": "Trio Dances",
            "details": "",
            "url": "/hidden/P0035 Trio Dances/P0035 full.mp3"
        } 
      ]
    });

});