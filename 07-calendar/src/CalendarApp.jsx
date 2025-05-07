import { Toaster } from "sonner";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <Toaster richColors />
      <AppRouter />
    </Provider>
  );
};
