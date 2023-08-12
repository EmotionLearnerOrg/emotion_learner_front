import Modal from 'react-native-modal';
import { makeModalPaymentStyles } from './ModalPayment.style';
import { Text, View } from 'react-native';

interface ModalPaymentProps {
    isModalVisible: boolean;
    title: string;
    message: string;
    setModalVisible: (isModalVisible: boolean) => void;
}

const ModalPayment: React.FC<ModalPaymentProps> = ({ isModalVisible, title, message, setModalVisible }) => {
    const style = makeModalPaymentStyles();
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={style.modal}
            backdropOpacity={0.5}
            useNativeDriver={true}>
            <View style={style.modalContent}>
                <Text style={style.modalTitle}>{title}</Text>
                <Text style={style.modalMessage}>{message}</Text>
            </View>
        </Modal>
    );
}

export default ModalPayment;