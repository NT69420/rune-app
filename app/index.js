import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, Button } from "react-native";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence, SlideInUp } from "react-native-reanimated";
import { COLORS, FONT, SIZES } from "../constants/theme";

export default function Index() {
  const [showButtons, setShowButtons] = useState(false);
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0, { duration: 1000, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handlePress = () => {
    opacity.value = withTiming(0, { duration: 500 });
    setTimeout(() => {
      setShowButtons(true);
    }, 500);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.secondary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!showButtons ? (
        <TouchableOpacity onPress={handlePress}>
          <Animated.Text style={[{ color: COLORS.white, fontFamily: FONT.bold, fontSize: SIZES.large }, animatedStyle]}>
            RUNE
          </Animated.Text>
        </TouchableOpacity>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Animated.View entering={SlideInUp.duration(500)}>
            <Button title="Crear Personaje" onPress={() => {}} />
          </Animated.View>
          <Animated.View entering={SlideInUp.duration(500)} style={{ marginTop: 20 }}>
            <Button title="Revisar Clases" onPress={() => {}} />
          </Animated.View>
        </View>
      )}
    </SafeAreaView>
  );
}