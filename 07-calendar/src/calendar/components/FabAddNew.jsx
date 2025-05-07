import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { onOpenDateModal } = useUiStore();
  const { selectEvent } = useCalendarStore();

  const createEvent = () => {
    selectEvent(null);
    onOpenDateModal();
  };

  return (
    <>
      <button onClick={createEvent} className="btn btn-primary fab">
        <i className="fa fa-plus" />
      </button>
    </>
  );
};
