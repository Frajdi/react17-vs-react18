import AutomaticBatchingContainer from "./AutomaticBatching/AutomaticBatchingContainer";
import FlushSync from "./FlushSync/FlushSync";
import UseTransition from "./UseTransition/UseTransition";
import UseId from "./UseId/UseId";
import { VaporPage } from "@vapor/react-custom";
import { ExtendedTypography } from "@vapor/react-extended";
import VaporHeaderBar from "@vapor/react-custom/VaporHeaderBar";
import Grid from "@vapor/react-material/Grid";
import { Card } from "@vapor/react-material";
const Layout = () => {
  return (
    <VaporPage>
      {" "}
      <VaporHeaderBar title="React 18.0.2" divider />
      <Grid container spacing={2} padding={2}>
        <Grid item xs={6}>
          <Card sx={{ p: 3 , height: 230}}>
            <ExtendedTypography
              variant="titleMedium"
              color="primary.interactiveDefault"
            >
              Batching
            </ExtendedTypography>{" "}
            <AutomaticBatchingContainer />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ p: 3 , height: 230}}>
            <ExtendedTypography
              variant="titleMedium"
              color="primary.interactiveDefault"
            >
              FlushSync
            </ExtendedTypography>
            <FlushSync />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ p: 3 , height: 230}}>
            <ExtendedTypography
              variant="titleMedium"
              color="primary.interactiveDefault"
            >
              UseID
            </ExtendedTypography>
            <UseId />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ p: 3 , overflow: "hidden", height: 230}}>
            <UseTransition />{" "}
          </Card>
        </Grid>
      </Grid>
    </VaporPage>
  );
};
export default Layout;
