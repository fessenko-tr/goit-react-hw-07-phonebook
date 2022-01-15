import PropTypes from "prop-types";

function Notification({ msg }) {
  return <p>{msg}</p>;
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
export default Notification;
