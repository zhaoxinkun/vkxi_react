import {useModal} from "@/Hooks/Modal/useModal.jsx";
import {useCallback, useState} from "react";

function useCrudModal(defaultType = 'add') {

    // 控制打开modal
    const modal = useModal(false);
    // modal 类型
    const [modalType, setModalType] = useState(defaultType);
    const [record, setRecord] = useState(null);

    const openAdd = useCallback(() => {
        setModalType('add');
        setRecord(null);
        modal.show();
    }, [modal])

    const openEdit = useCallback((record) => {
        setModalType('edit');
        setRecord(record);
        modal.show();
    }, [modal])

    const close = useCallback(() => {
        modal.hide();
    }, [modal])

    return {
        open: modal.open,//状态（Modal 是否显示）
        modalType,//modal 类型
        record, //需不需要带上行数据
        openAdd, //打开添加的
        openEdit, //打开编辑的
        close, //关闭
    }

}

export default useCrudModal;