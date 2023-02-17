import AutomaticBatchingContainer from "./AutomaticBatching/AutomaticBatchingContainer";
import FlushSync from "./FlushSync/FlushSync";
import UseTransition from "./UseTransition/UseTransistion";
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
      <VaporHeaderBar title="React 17.0.2" divider />
      <Grid container spacing={2} padding={2}>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 150, p: 3 }}>
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
          <Card sx={{ minHeight: 150, p: 3 }}>
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
          <Card sx={{ minHeight: 150, p: 3 }}>
            <ExtendedTypography
              variant="titleMedium"
              color="primary.interactiveDefault"
            >
              UseID (is not uesd)
            </ExtendedTypography>
            <UseId />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 150, p: 3 }}>
            <UseTransition />{" "}
          </Card>
        </Grid>
      </Grid>
    </VaporPage>
  );
};
export default Layout;
