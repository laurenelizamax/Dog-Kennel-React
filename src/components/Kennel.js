import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./Kennel.css"

class Kennel extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}

export default Kennel


// import React, { Component } from 'react'
// import './Kennel.css'
// import AnimalCard from "./animal/AnimalCard"
// import LocationCard from "./location/LocationCard"
// import EmployeeCard from "./employee/EmployeeCard"
// import OwnerCard from "./owner/OwnerCard"
// import NavBar from "./nav/NavBar"

// class Kennel extends Component {
//     render() {
//         return (
//             <div>
//              <NavBar />
//             <div>
//                 <h2>Student Kennels<br />
//                     <small>Loving care when you're not there.</small>
//                 </h2>
//                 <address>
//                     Visit Us at the Nashville North Location
//                     <br />500 Puppy Way
//                 </address>
//             </div>
//             <AnimalCard />
//             <AnimalCard />
//             <AnimalCard />
//             <LocationCard />
//             <LocationCard />
//             <LocationCard />
//             <EmployeeCard />
//            <EmployeeCard />
//             <EmployeeCard />
//             <OwnerCard />
//             <OwnerCard />
//             <OwnerCard />
//             </div>
//         );
//     }
// }

// export default Kennel