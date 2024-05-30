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
          <option value="Plastic">Plastic</option>
          <option value="Bronze">Bronze</option>
          <option value="Metal">Metal</option>
          <option value="Fresh">Fresh</option>
          <option value="Soft">Soft</option>
        </Select>
      </HStack>
    </Box>
  );
};

export default SearchFilter;
