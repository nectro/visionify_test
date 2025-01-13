import { TasksProvider } from "@/state/tasksReducer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <TasksProvider><Component {...pageProps} /></TasksProvider>;
}
