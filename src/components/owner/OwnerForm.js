import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
    state = {
        ownerName: "",
        dog: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewOwner= evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.dog === "") {
            window.alert("Please input owner name and pet name");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.ownerName,
                dog: this.state.dog,
            };

            // Create the animal and redirect user to animal list
            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owner"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ownerName"
                        placeholder="Owner Name"
                        />
                        <label htmlFor="ownerName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="dog"
                        placeholder="Pet Name"
                        />
                        <label htmlFor="dog">Pet Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm