import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
      ownerName: "",
      dog: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedOwner = {
        id: this.props.match.params.ownerId,
        name: this.state.ownerName,
        dog: this.state.dog
      };

      OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/owner"))
    }

    componentDidMount() {
      OwnerManager.get(this.props.match.params.ownerId)
      .then(owner => {
          this.setState({
            ownerName: owner.name,
            dog: owner.dog,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerName"
                value={this.state.ownerName}
              />
              <label htmlFor="ownerName">Owner name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="dog"
                value={this.state.dog}
              />
              <label htmlFor="dog">Pet's Name</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default OwnerEditForm