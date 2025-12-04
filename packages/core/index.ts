import "@an-ui/theme/index.css";
import { makeInstaller } from "@an-ui/utils";
import components from "./components";


const installer = makeInstaller(components);

export * from "@an-ui/components";
export default installer;