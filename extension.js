import SpeechToText from 'speech-to-text';
var spoken;
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.speak = function(text) {
        TextToSpeech.talk(text);
    };
    ext.record = function() {
        
        const onAnythingSaid = text => console.log(`Interim text: ${text}`);
        const onFinalised = text => spoken = ${text};

        try {
           const listener = new SpeechToText(onAnythingSaid, onFinalised);
           listener.startListening();
        } catch (error) {
               console.log(error);
        }
    };
    ext.said = function() {
        return spoken;
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
         // Block type, block name, function name, parameters
         [' ', 'speak', 'speak', 'Hello world'],
         [' ', 'record', 'record'],
         ['w', 'said', 'said']
        ]
    };

    // Register the extension
    ScratchExtensions.register('text-and-speech', descriptor, ext);
})({});
