import {useState} from "react";
import MPrimaryBtn from "../../core/ui-kit/buttons/primaryBtn";

export default function MWhitePaper() {
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const toggleModal = () => {

    };

    return (
        <div className={"pv-50 bg-dark d-flex justify-content-center"}>
            <MPrimaryBtn
                label={"WhitePaper"}
                key={"whitePaperRequest"}
                size={"large"}
                type={"danger"}
                action={toggleModal}
            />
        </div>
    );
}
