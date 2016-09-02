var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddNoteForm = React.createClass({
    render: function() {
        return (
            <div >
                <h5>Add a Note</h5>
                <form onSubmit={this.onSubmit}>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <label>Note Text <br />
                                <input type='text' ref='text' placeholder='Enter Text ... ' className='form-group'/>
                            </label>
                            <button className='button'>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    onSubmit: function(e) {
        e.preventDefault();
        var note = this.refs.text.value;

        AppActions.addNote(note);
    }
});

module.exports = AddNoteForm;
