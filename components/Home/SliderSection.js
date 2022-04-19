import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SliderSection = ({ images, minimusWidth, bottom, top, left }) => {
  const [imgActive, setImgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  var styleSlider = {
    wrap: {
      width: WIDTH - minimusWidth,
      height: HEIGHT * 0.2,
      borderRadius: 4,
    },
    wrapDotProps: {
      top: top,
      bottom: bottom,
      left: left,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styleSlider.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styleSlider.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={index}
              resizeMode="stretch"
              style={styleSlider.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={[styleSlider.wrapDotProps, styles.wrapDotMain]}>
          {images.map((e, index) => (
            <Text
              key={index}
              style={imgActive == index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SliderSection;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  dotActive: {
    margin: 3,
    color: "#fba433",
  },
  wrapDotMain: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: "white",
  },
});
