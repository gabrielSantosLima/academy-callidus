import { ManageConditionalRender } from "./components/ManageConditionalRender";
import ManageImage from "./components/ManageImage";
import ManageList from "./components/ManageList";
import { ManageStates } from "./components/ManageStates";

export default function App() {
  return (
    <div className="app">
      <ManageImage />
      <ManageStates />
      <ManageList />
      <ManageConditionalRender />
    </div>
  )
}