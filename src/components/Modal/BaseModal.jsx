// 封装一个modal出来,这里只负责JSX,不负责逻辑

import {Modal} from 'antd';

function BaseModal(props) {
    const {
        title,
        open,
        onOk,
        onCancel,
        children,
    } = props;
    return (
        <Modal
            title={title} //标题
            open={open} // 是否显示
            onOk={onOk}
            onCancel={onCancel}
        >
            {/*子元素*/}
            {children}
        </Modal>
    )
}
