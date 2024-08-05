import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import React, { useState } from "react";
import { images, icons } from "../constants";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const FormFields = ({
  title,
  value,
  handleChangeText,
  placeholder,
  ...props
}) => {
  const [showPw, setShowPw] = useState("");
  return (
    <StyledView className="my-2 flex flex-col justify-around">
      <StyledText className="text-white text-lg font-semibold mb-2">
        {title}
      </StyledText>
      <StyledView className="w-full h-16 px-4 bg-black border-2 border-red-500 rounded-2xl flex-row items-center">
        <StyledTextInput
          className="flex-1 text-white font-semibold"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPw}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPw(!showPw)}>
            <Image
              source={!showPw ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </StyledView>
    </StyledView>
  );
};

export default FormFields;
