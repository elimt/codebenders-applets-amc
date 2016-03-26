.factory('fireBaseData', function($firebase) {
    var ref = new Firebase("https://organator.firebaseio.com/"),
        refExpenses = new Firebase("https://organator.firebaseio.com/expenses"),
        refRoomMates = new Firebase("https://organator.firebaseio.com/room-mates");
    return {
        ref: function() {
            return ref;
        },
        refExpenses: function() {
            return refExpenses;
        },
        refRoomMates: function() {
            return refRoomMates;
        }
    }
});