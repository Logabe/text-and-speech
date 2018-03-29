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
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
         // Block type, block name, function name, parameters
         [' ', 'speak', 'speak',"Hello world"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('text-and-speech', descriptor, ext);
})({});
