import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface SearchBarProps {
  onSearch?: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search for food..." 
}) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onSearch}
      activeOpacity={0.7}
    >
      <Text style={styles.searchIcon}>🔍</Text>
      <Text style={styles.placeholder}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default SearchBar;
