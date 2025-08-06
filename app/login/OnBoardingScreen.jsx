import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { width } = Dimensions.get("window");
  const router = useRouter();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#FDECEA",
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      {/* Header */}
      <View
        style={{
          backgroundColor: "#E8A7A7",
          width: "100%",
          paddingVertical: 60,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#7A1E1E",
          }}
        >
          Hello Again!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#6E4F4F",
            marginTop: 8,
            textAlign: "center",
            width: "80%",
          }}
        >
          Welcome back you’ve been missed.
        </Text>
      </View>

      {/* Email */}
      <View
        style={{
          marginTop: 40,
          width: "85%",
          backgroundColor: "#fff",
          borderRadius: 8,
          paddingHorizontal: 16,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter your email Id"
          placeholderTextColor="#888"
          style={{
            flex: 1,
            fontSize: 16,
          }}
        />
        <Icon name="email" size={20} color="#888" />
      </View>

      {/* Password */}
      <View
        style={{
          marginTop: 20,
          width: "85%",
          backgroundColor: "#fff",
          borderRadius: 8,
          paddingHorizontal: 16,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}
          style={{
            flex: 1,
            fontSize: 16,
          }}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            name={passwordVisible ? "visibility" : "visibility-off"}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot password */}
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          marginRight: "8%",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#B45C5C",
            fontSize: 14,
          }}
        >
          Forgot password
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#B45C5C",
          width: "85%",
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: "center",
          marginTop: 30,
          elevation: 2,
        }}
        onPress={() => {
          // You can push to home or other screen
          router.push("/products/productIndex");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>

      {/* Or Continue With */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 25,
          width: "85%",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#ccc",
          }}
        />
        <Text
          style={{
            marginHorizontal: 12,
            color: "#888",
          }}
        >
          Or Continue With
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#ccc",
          }}
        />
      </View>

      {/* Social */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <FontAwesome name="google" size={24} color="#EA4335" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <FontAwesome name="apple" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      {/* Register */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: "#333",
          }}
        >
          Not a Member?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/register")}
        >
          <Text
            style={{
              color: "#B45C5C",
              fontWeight: "500",
            }}
          >
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
