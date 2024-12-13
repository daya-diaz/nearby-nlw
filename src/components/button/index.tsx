import { Text, TouchableOpacity, TouchableOpacityProps, TextProps, ActivityIndicator } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean; 
}

function Button({ children, style, isLoading = false, ...props }: ButtonProps) {
  return (
    <TouchableOpacity 
      accessibilityRole="button"
      activeOpacity={0.8} 
      style={[s.container, style]} 
      disabled={isLoading} 
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

function Title({ children, ...rest }: TextProps) {
  return (
    <Text style={s.title} {...rest}>
      {children}
    </Text>
  )
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

function Icon({icon: Icon}: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title;
Button.Icon = Icon;

export { Button }