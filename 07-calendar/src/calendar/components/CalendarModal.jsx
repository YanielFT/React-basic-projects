import { addHours, differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { toast } from "sonner";
import { useMemo } from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { activeEvent, saveEvent } = useCalendarStore();
  const [formValue, setFormValue] = useState({
    title: activeEvent?.title || "",
    notes: activeEvent?.notes || "",
    start: activeEvent?.start || new Date(),
    end: activeEvent?.end || addHours(new Date(), 2),
  });
  useEffect(() => {
    setFormValue({
      title: activeEvent?.title || "",
      notes: activeEvent?.notes || "",
      start: activeEvent?.start || new Date(),
      end: activeEvent?.end || addHours(new Date(), 2),
    });
  }, [activeEvent]);

  const { isDateModalOpen, onCloseDateModal, onOpenDateModal } = useUiStore();

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";
    if (formValue.title.trim().length == 0) {
      return "is-invalid";
    }
  }, [formValue.title, formSubmitted]);

  const onInputChanged = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValue({
      ...formValue,
      [changing]: event,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const difference = differenceInSeconds(formValue.end, formValue.start);

    if (difference <= 0) {
      return toast.error("The end date must be greater than the start date");
    }

    if (
      formValue.title.trim().length == 0 ||
      formValue.notes.trim().length == 0
    ) {
      return;
    }
    console.log({ ...activeEvent, ...formValue });
    await saveEvent({ ...activeEvent, ...formValue });
    setFormSubmitted(false);
    onCloseDateModal();
  };

  return (
    <Modal
      isOpen={isDateModalOpen}
      onAfterOpen={onOpenDateModal}
      onRequestClose={onCloseDateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className=" mt-3 d-flex flex-column justify-content-center align-items-start">
          <label>Fecha y hora inicio</label>
          <DatePicker
            locale="es"
            className="form-control"
            dateFormat={"Pp"}
            selected={formValue.start}
            showTimeSelect
            timeCaption="Hora"
            onChange={(event) => onDateChanged(event, "start")}
          />
        </div>
        <div className=" mt-3 d-flex flex-column justify-content-center align-items-start">
          <label>Fecha y hora fin</label>
          <DatePicker
            locale="es"
            minDate={formValue.start}
            className="form-control w-100"
            selected={formValue.end}
            dateFormat={"Pp"}
            showTimeSelect
            timeCaption="Hora"
            onChange={(event) => onDateChanged(event, "end")}
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`${titleClass} form-control`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValue.title}
            onChange={onInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className={`${titleClass} form-control`}
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValue.notes}
            onChange={onInputChanged}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
