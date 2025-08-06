import { router, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Index({ navigation }) {
  const { width, height } = Dimensions.get("window");
    const router=useRouter();
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      {/* First image */}
      <ImageBackground
        source={require("./../assets/images/bg1.png")}
        resizeMode="cover"
        style={{
          width: width,
          height: height * 0.65, // 65% height
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Optional content on first image */}
      </ImageBackground>

      {/* Second image */}
      <ImageBackground
        source={require("./../assets/images/bg2.png")}
        resizeMode="cover"
        style={{
          width: width,
          height: height * 0.40, // Remaining 35% or adjust as needed
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0)", // Transparent
          }}
        />

        {/* Text */}
        <View
          style={{
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              fontSize: 42,
              color: "#ffffff",
              fontFamily: "serif",
            }}
          >
            Viorra
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              marginBottom:0
            }}
          >
            Your Beauty, Delivered.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => router.push('/login/OnBoardingScreen')}
          style={{
            backgroundColor: "#B45C5C",
            paddingVertical: 14,
            paddingHorizontal: 40,
            borderRadius: 8,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}
