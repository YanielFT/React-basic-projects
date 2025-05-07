import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const { isDateModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const toggleDateModa = () => {
    isDateModalOpen
      ? dispatch(onCloseDateModal())
      : dispatch(onOpenDateModal());
  };

  return {
    isDateModalOpen,
    onOpenDateModal: () => dispatch(onOpenDateModal()),
    onCloseDateModal: () => dispatch(onCloseDateModal()),
    toggleDateModa,
  };
};
