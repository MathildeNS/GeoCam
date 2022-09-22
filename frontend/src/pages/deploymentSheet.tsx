import MainLayout from "../layouts/mainLayout";
import HeadBar from "../components/HeadBar";
import Drawer from "../components/drawer";
import NavigationPath from "../components/navigationPath";
import DeploymentDetails from "../components/deploymentDetails";


function DeploymentSheet(props) {
  return (
    <div className="Main">
      <MainLayout
        Header={<HeadBar />}
        Side={<Drawer />}
        Navigation={<NavigationPath />}
        Main={<DeploymentDetails bool={props.bool}/>}
      />
    </div>
  );
}

export default DeploymentSheet;