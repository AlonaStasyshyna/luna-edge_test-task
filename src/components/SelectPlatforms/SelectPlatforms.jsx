import { Label, Select } from './SelectPlatforms.styled';

export const SelectPlatforms = ({ handleChange }) => {
  return (
    <Label>
      Platform
      <Select
        name="platform"
        defaultValue="placeholder"
        onChange={handleChange}
      >
        <option value="placeholder" disabled hidden>
          Select platform
        </option>
        <option value="salesforce">Salesforce</option>
        <option value="ecwid">Ecwid</option>
        <option value="other">Other</option>
      </Select>
    </Label>
  );
};
