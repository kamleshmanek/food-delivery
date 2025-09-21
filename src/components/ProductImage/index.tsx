import React from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

interface ProductImageProps {
  source: any;
  style?: any;
  placeholder?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ 
  source, 
  style,
  placeholder = 'https://via.placeholder.com/400x300?text=No+Image'
}) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const imageSource = typeof source === 'string' 
    ? { uri: source } 
    : source;

  const handleLoadStart = () => {
    setLoading(true);
    setError(false);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <View style={[styles.container, style]}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#e74c3c" />
        </View>
      )}
      
      <Image
        source={error ? { uri: placeholder } : imageSource}
        style={[styles.image, style]}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        resizeMode="cover"
      />
      
      {error && (
        <View style={styles.errorContainer}>
          <Image
            source={{ uri: placeholder }}
            style={[styles.image, style]}
            resizeMode="cover"
          />
        </View>
      )}
    </View>
  );
};

export default ProductImage;
