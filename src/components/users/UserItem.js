import React, { Component } from "react";
import PropTypes from "prop-types";

class UserItem extends Component {
  render() {
    //destructure the state keys in user.js
    const { login, id, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;

//Refactoring to Functional components
// const UserItem = ({user: { login, id, avatar_url, html_url } }) => {

//   return (
//     <div className="card text-center">
//       <img
//         src={avatar_url}
//         alt=""
//         className="round-img"
//         style={{ width: "60px" }}
//       />
//       <h3>{login}</h3>
//       <div>
//         <a href={html_url} className="btn btn-dark btn-sm my-1">
//           More
//         </a>
//       </div>
//     </div>
//   );
// };

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

// export default UserItem;
