import React from "react";
import PropTypes from "prop-types";

// export class Navbar extends Component {
//   static defaultProps = {
//     title: "Github Default",
//     icon: "fab fa-github"
//   };

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           <i class="this.props.icon" /> {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
// }

// export default Navbar;

//Functonal component , destructure props.icon and props.title
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Default",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
