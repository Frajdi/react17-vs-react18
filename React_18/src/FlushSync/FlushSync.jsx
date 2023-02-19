import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import ExtendedTypography from "@vapor/react-extended/ExtendedTypography";
import Stack from "@vapor/react-material/Stack";
import Button from "@vapor/react-material/Button";

const FlushSync = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    function handleBeforePrint() {
      flushSync(() => {
        setIsPrinting(true);
      });
    }

    function handleAfterPrint() {
      setIsPrinting(false);
    }

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <>
      <br />
      <Stack direction="column">
        <ExtendedTypography variant="titleLarge">Invoice</ExtendedTypography>
        <Stack direction="row" justifyContent="space-between">
          <ExtendedTypography variant="body">Costumer UUID:</ExtendedTypography>
          {!isPrinting ? (
            <ExtendedTypography variant="body" sx={{ color: "grey" }}>
              633b8c54-d5e7-46cb-8edf-c6eeffeb4e79
            </ExtendedTypography>
          ) : null}
        </Stack>
        <ExtendedTypography variant="bodyLarge">Name : Josh Parker</ExtendedTypography>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column">
            <ExtendedTypography variant="bodyLarge">Amount Of Products: 3</ExtendedTypography>
            <ExtendedTypography variant="bodyLarge">VAT : 30$</ExtendedTypography>
            <ExtendedTypography variant="bodyLarge">
              Total Price To Pay : 200 $
            </ExtendedTypography>
            <Button variant="contained" sx={{mt: 1}} onClick={() => window.print()}>
              Print
            </Button>
          </Stack>
          {!isPrinting ? (
            <img
              height={70}
              style={{ marginRight: "2rem" }}
              src="https://w7.pngwing.com/pngs/1004/394/png-transparent-barcode-qr-code-data-matrix-international-article-number-qr-codes-miscellaneous-label-text.png"
            ></img>
          ) : null}
        </Stack>
      </Stack>
    </>
  );
};

export default FlushSync;
