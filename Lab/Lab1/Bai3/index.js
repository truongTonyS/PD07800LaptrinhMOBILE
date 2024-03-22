import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Bai3Lab1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNameChange = (text) => {
    setName(text);
    setNameError("");
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError("");
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError("");
  };

  const handleSubmit = () => {
    // Xử lý logic khi người dùng nhấn nút Submit
    // Ví dụ: kiểm tra và xác nhận thông tin đăng ký
    // Nếu thông tin hợp lệ, gửi yêu cầu đăng ký đến server

    if (!name) {
      setNameError("Name is required");
    }
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name *</Text>
        <View
          style={[
            styles.textInputContainer,
            !!nameError
              ? styles.errorTextInputContainer
              : !!name && styles.validTextInputContainer,
          ]}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            onChangeText={handleNameChange}
            value={name}
          />
        </View>
        {!!nameError && <Text style={styles.errorText}>{nameError}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email *</Text>
        <View
          style={[
            styles.textInputContainer,
            !!emailError
              ? styles.errorTextInputContainer
              : !!email && styles.validTextInputContainer,
          ]}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
          />
        </View>
        {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Password *</Text>
        <View
          style={[
            styles.textInputContainer,
            !!passwordError
              ? styles.errorTextInputContainer
              : !!password && styles.validTextInputContainer,
          ]}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry={true}
          />
        </View>
        {!!passwordError && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Confirm Password *</Text>
        <View
          style={[
            styles.textInputContainer,
            !!confirmPasswordError
              ? styles.errorTextInputContainer
              : confirmPassword !== password &&
                confirmPassword &&
                styles.errorTextInputContainer,
          ]}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Confirm your password"
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
            secureTextEntry={true}
          />
        </View>
        {!!confirmPasswordError && (
          <Text style={styles.errorText}>{confirmPasswordError}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  inputTitle: {
    marginBottom: 5,
    color: "#000",
    fontWeight: "bold",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  validTextInputContainer: {
    borderColor: "lightgreen",
  },
  errorTextInputContainer: {
    borderColor: "red",
  },
  textInput: {
    flex: 1,
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Bai3Lab1;