import { DefaultTextField } from "../../../components/Basic/TextField/TextField";
import { Box } from "@mui/system";
import { SkipLine } from "../../../components/Basic/SkipLine/styles"
import { DefaultTypography } from "../../../components/Basic/Labels/Typography"
import { COLORS } from "../../../config/defaultColors";
import { DefaultButton } from "../../../components/Basic/Button/Default/DefaultButton";

export default function RegisterDetails({ formData, setFormData }) {

  return (
    <div>
      <Box>
        <DefaultTextField label="Produto" width="500px" variant="outlined" type="text" value={formData.fieldTestOne} 
                          onChange={(e) => setFormData({ ...formData, fieldTestOne: e.target.value}) } />
        <SkipLine paddingTop="50" />
        <DefaultTextField label="Produto" width="500px" variant="outlined" type="text" value={formData.fieldTestOne} 
                          onChange={(e) => setFormData({ ...formData, fieldTestOne: e.target.value}) } />
        <SkipLine paddingTop="50" />
        <DefaultTextField label="Produto" width="500px" variant="outlined" type="text" value={formData.fieldTestOne} 
                          onChange={(e) => setFormData({ ...formData, fieldTestOne: e.target.value}) } />
        <SkipLine paddingTop="50" />
        <DefaultTextField label="Produto" width="500px" variant="outlined" type="text" value={formData.fieldTestOne} 
                          onChange={(e) => setFormData({ ...formData, fieldTestOne: e.target.value}) } />
        <SkipLine paddingTop="50" />
      </Box>
    </div>
  );    
}