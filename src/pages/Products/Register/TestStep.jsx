import { DefaultTextField } from "../../../components/Basic/TextField/TextField";
import { Box } from "@mui/system";
import { SkipLine } from "../../../components/Basic/SkipLine/styles"

export default function TestStep({ formData, setFormData }) {

  return (
    <div>
      <Box>
        <DefaultTextField label="Field test 1" variant="outlined" type="text" value={formData.fieldTestOne} onChange={(e) => setFormData({ ...formData, fieldTestOne: e.target.value}) } />
      </Box>
      <Box>
        <SkipLine paddingTop="50" />
        <DefaultTextField label="Field test 2" variant="outlined" type="text" value={formData.fieldTestTwo} onChange={(e) => setFormData({ ...formData, fieldTestTwo: e.target.value}) } />
      </Box>
      <Box>
        <SkipLine paddingTop="50" />
        <DefaultTextField label="Field test 3" variant="outlined" type="text" value={formData.fieldTestThree} onChange={(e) => setFormData({ ...formData, fieldTestThree: e.target.value}) } />
      </Box>
    </div>
  );    
}