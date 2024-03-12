import { FC } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { spaceObjectTypes, DEFAULT_FILTER } from '../shared';

const filters = Object.keys(spaceObjectTypes);

interface FilterProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

export const Filter: FC<FilterProps> = ({
  isVisible,
  setIsVisible,
  activeFilter,
  setActiveFilter,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setActiveFilter(event.target.value as string);
    setIsVisible(false);
  };

  return (
    <Drawer anchor="right" open={isVisible} onClose={() => setIsVisible(false)}>
      <Box
        sx={{ width: 250, py: 4, px: 1 }}
        role="presentation"
      >
        <FormControl fullWidth>
          <InputLabel id="typesLabel">DSO type</InputLabel>
          <Select
            id="typesFilter"
            value={activeFilter}
            label="DSO type"
            onChange={handleChange}
          >
            <MenuItem key={DEFAULT_FILTER} value={DEFAULT_FILTER} selected>
              {DEFAULT_FILTER}
            </MenuItem>

            {filters.map(filter => (
              <MenuItem key={filter} value={filter}>
                {filter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Drawer>
  );
};
