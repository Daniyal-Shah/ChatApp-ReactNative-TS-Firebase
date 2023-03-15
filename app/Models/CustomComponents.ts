import {TextInputProps, ButtonProps, PressableProps} from 'react-native';

// Custom Button
export interface CustomButtonProps extends ButtonProps {
  btnStyles: Object | undefined;
  textStyles: Object | undefined;
}

// Custom TextInput
export interface CustomInputFieldProps extends TextInputProps {
  icon: string;
  type: 'password' | undefined;
  styles: Object | undefined;
  error: boolean;
}

// Custom Loading Spinner
export interface CustomLoadingSpinnerProps {
  isLoading: boolean;
}

export interface CustomCheckboxProps extends PressableProps {
  title: string;
  isChecked: boolean;
}
