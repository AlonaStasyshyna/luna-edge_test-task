import { Label, Select } from './SelectPlatforms.styled';

export const NotGoogle = ({ handleChange }) => {
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
        <option value="salesforce">Microsoft Outlook</option>
        <option value="ecwid">Yahoo</option>
        <option value="other">Other</option>
      </Select>
    </Label>
  );
};
