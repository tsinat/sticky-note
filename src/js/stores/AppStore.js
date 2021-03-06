var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, EventEmitter.prototype, {
    addNote:function(note){
        _notes.push(note);
    },
    getNotes: function() {
        return _notes;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actonType){
        case AppConstants.ADD_NOTE:
        console.log('Adding Notes')
        AppStore.addNote(action.note);
        // emit change
        AppStore.emit(CHANGE_EVENT);
    }

    return true;
});

module.exports = AppStore;
