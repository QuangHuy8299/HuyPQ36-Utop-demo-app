import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/Entypo";

export default function Funtions() {
  return (
    <View style={styles.headerBelow}>
      <View style={styles.headerBelowFeature}>
        <Icon1 name="wallet" size={40} color="#000" />
        <Text style={styles.headerBelowFeatureText}>Nạp Điểm</Text>
      </View>
      <View style={styles.headerBelowFeature}>
        <Icon1 name="credit-card" size={40} color="#000" />
        <Text style={styles.headerBelowFeatureText}>Nạp Thẻ ĐT</Text>
      </View>
      <View style={styles.headerBelowFeature}>
        <Icon name="people-outline" size={40} color="#000" />
        <Text style={styles.headerBelowFeatureText}>Membership</Text>
      </View>
      <View style={styles.headerBelowFeature}>
        <Icon name="ios-scan-outline" size={40} color="#000" />
        <Text style={styles.headerBelowFeatureText}>Quét QR</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBelow: {
    flexDirection: "row",
    marginTop: 20,
  },
  headerBelowFeature: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerBelowFeatureText: {
    fontSize: 12,
    marginTop: 6,
  },
});
