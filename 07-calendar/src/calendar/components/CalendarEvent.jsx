/* eslint-disable react/prop-types */
export const CalendarEvent = (props) => {
  const { title, user } = props.event;
  console.log(props);
  
  return (
    <>
      <strong>{title}</strong>
      <h6>{user.name}</h6>
    </>
  );
};
