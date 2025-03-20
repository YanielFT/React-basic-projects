import PropTypes from 'prop-types';

const newMessage = {
  message: "Hola",
  title: "Fernando",
};

const getGreeting = () => (
  <h2>{`${newMessage.message} ${newMessage.title}`}</h2>
);

const FirstApp = ({title, subtitle}) => {
  
  return (
    <>
      {title}
      <p>{+subtitle + 1}</p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
}

FirstApp.defaultProps = {
  subtitle: 22
}

export default FirstApp;