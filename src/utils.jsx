import Autocomplete from "./components/Autocomplete";
import Dropdown from "./components/Dropdown";

export default function renderComponent(name) {
  switch (name) {
    case "autocomplete":
      return <Autocomplete />;
    case "dropdown":
      return <Dropdown />
  }
}
