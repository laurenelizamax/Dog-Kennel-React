import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from '../../modules/OwnerManager'
    import "./Owner.css";

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        }
        deleteOwner= id => {
            OwnerManager.delete(id)
            .then(() => {
              OwnerManager.getAll()
              .then((newOwners) => {
                this.setState({
                    owners: newOwners
                })
              })
            })
          }

    componentDidMount(){
        // console.log("OWNER LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        OwnerManager.getAll()
        .then((owners) => {
            this.setState({
                owners: owners
            })
        })
    }

    render(){
        // console.log("OWNER LIST: Render");

        return(
            <>
            <section className="section-content">
           <button type="button"
                   className="formButton"
                   onClick={() => {this.props.history.push("/owner/new")}}>
                   Sign Up for Service
          </button>
         </section>
            <div className="container-cards">
        {this.state.owners.map(owner =>
        <OwnerCard key={owner.id} 
                                         owner={owner} 
                                         deleteOwner={this.deleteOwner}
                                         />
      )}
            </div>
            </>
        )
    }
}

export default OwnerList