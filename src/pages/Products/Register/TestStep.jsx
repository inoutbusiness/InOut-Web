import { DefaultTextField } from "../../../components/Basic/TextField/TextField";
import { Box } from "@mui/system";
import { SkipLine } from "../../../components/Basic/SkipLine/styles"
import { DefaultTypography } from "../../../components/Basic/Labels/Typography"
import { COLORS } from "../../../config/defaultColors";
import { DefaultButton } from "../../../components/Basic/Button/Default/DefaultButton";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";

export default function TestStep({ formData, setFormData }) {

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
  ];

  return (
    <div>
      <Box>
        <DefaultTypography variant="h5" color={COLORS.PrimaryColor} paddingTop="35" text="Informe o produto que deseja incluir, se ele já existir basta adicionar a quantidade!" />
        <SkipLine paddingTop="20" />
        <div style={{ display: "flex" }}>
        <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 500 }}
            renderInput={(params) => <TextField {...params} label="Produtos" />}
          />
          <DefaultButton width="200px" height="50px" marginLeft="8%" backgroundColor={COLORS.PrimaryColor} title="Cadastrar novo produto" />
        </div>
      </Box>
    </div>
  );
}