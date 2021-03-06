angular.module('app', ["pubnub.angular.service"])
 .controller('ChatCtrl', function($scope, Pubnub) {        
   $scope.channel = 'messages-channel';
   // Generating a random uuid between 1 and 100 using an utility function from the lodash library.         
   $scope.uuid = _.random(100).toString();
   Pubnub.init({
         publish_key: 'YOUR-PUBNUB-PUBLISH-KEY',
         subscribe_key: 'YOUR-PUBNUB-SUBSCRIBE-KEY',
         uuid: $scope.uuid
       });
 });
 // Send the messages over PubNub Network
 $scope.sendMessage = function() {
       // Don't send an empty message 
       if (!$scope.messageContent || $scope.messageContent === '') {
            return;
        }
        Pubnub.publish({
            channel: $scope.channel,
            message: {
                content: $scope.messageContent,
                sender_uuid: $scope.uuid,
                date: new Date()
            },
            callback: function(m) {
                console.log(m);
            }
        });
        // Reset the messageContent input
        $scope.messageContent = '';

    }

    $scope.messages = [];

// Subscribing to the ‘messages-channel’ and trigering the message callback
Pubnub.subscribe({
    channel: $scope.channel,
    triggerEvents: ['callback']
});

// Listening to the callbacks
$scope.$on(Pubnub.getMessageEventNameFor($scope.channel), function (ngEvent, m) {
    $scope.$apply(function () {
        $scope.messages.push(m)
    });
});

// A function to display a nice uniq robot avatar 
$scope.avatarUrl = function(uuid){
    return 'http://robohash.org/'+uuid+'?set=set2&bgset=bg2&size=70x70';
};