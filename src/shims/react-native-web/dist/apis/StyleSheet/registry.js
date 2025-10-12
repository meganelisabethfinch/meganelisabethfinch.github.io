// Shim to provide a StyleRegistry.resolve() method expected by react-bits
import StyleSheet from 'react-native-web/dist/cjs/exports/StyleSheet';

// If the real registry exists in newer versions, use it; otherwise provide a minimal resolver
const registry = StyleSheet && StyleSheet.registry ? StyleSheet.registry : {
  resolve: function(style) {
    // In react-native-web v0.21 StyleSheet.resolve may live elsewhere; try to use StyleSheet.flatten
    if (StyleSheet && typeof StyleSheet.flatten === 'function') {
      return StyleSheet.flatten(style) || {};
    }
    return {};
  }
};

export default registry;
