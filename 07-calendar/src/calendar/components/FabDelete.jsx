import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  const { deleteEvent, activeEvent } = useCalendarStore();

  const deleteEventHandle = async () => {
    await deleteEvent(activeEvent._id);
  };

  return (
    <>
      <button onClick={deleteEventHandle} className="btn btn-danger fab-danger">
        <i className="fa fa-trash-alt" />
      </button>
    </>
  );
};
