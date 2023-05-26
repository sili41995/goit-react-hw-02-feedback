import PropTypes from 'prop-types';
import css from 'components/Notification/Notification.styled';

const { NotificationMessage } = css;

const Notification = ({ message }) => (
  <NotificationMessage>{message}</NotificationMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
