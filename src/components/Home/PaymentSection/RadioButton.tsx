import { TouchableOpacity, View, Text } from 'react-native';

interface RadioButtonProps {
    label: string;
    selected: boolean;
    handleOnPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, selected, handleOnPress }) => (
    <TouchableOpacity onPress={handleOnPress} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#150B3D' }}>{label}</Text>
        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#FCCDCE', backgroundColor: selected ? '#FCCDCE' : 'transparent' }} />
    </TouchableOpacity>
);

export default RadioButton;