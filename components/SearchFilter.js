import { useDispatch } from 'react-redux';
import { Input, Select, Box, HStack } from '@chakra-ui/react';
import { setSearchQuery, setFilter } from '../redux/articlesSlice';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box mb={4}>
      <HStack spacing={4}>
        <Input
          placeholder="Search articles..."
          onChange={handleSearchChange}
        />
        <Select placeholder="Filter by category" onChange={handleFilterChange}>
          <option value="monitor">Monitor</option>
          <option value="Panel">Panel</option>
          <option value="Microchip">Microchip</option>
          <option value="Program">Program</option>
          <option value="Bus">Bus</option>
        </Select>
      </HStack>
    </Box>
  );
};

export default SearchFilter;
