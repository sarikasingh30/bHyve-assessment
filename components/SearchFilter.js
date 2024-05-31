import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, Box, HStack } from '@chakra-ui/react';
import { setSearchQuery, setFilter } from '../redux/articlesSlice';

const SearchFilter = () => {
  const {searchQuery} = useSelector(
    (state) => state.articles
  );
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
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Select placeholder="Filter by category" onChange={handleFilterChange}>
          <option value="monitor">Monitor</option>
          <option value="panel">Panel</option>
          <option value="microchip">Microchip</option>
          <option value="program">Program</option>
          <option value="bus">Bus</option>
        </Select>
      </HStack>
    </Box>
  );
};

export default SearchFilter;
