import { TouchableOpacity, Text } from "react-native";
import styles from "./StyledButton.styles";

export const StyledButton = ({ textContent, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.text}>{textContent}</Text>
    </TouchableOpacity>
  );
};
