import "@an-ui/theme/index.css";
import { makeInstaller } from "@an-ui/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";


library.add(fas);
const installer = makeInstaller(components);

export * from "@an-ui/components";
export default installer;