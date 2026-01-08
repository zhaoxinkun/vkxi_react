import {Form} from 'antd';
import useCrudModal from './useCrudModal.jsx';
import dayjs from "dayjs";
import {useCallback} from "react";

/**
 * 把 “CrudModal + Form 联动” 封装起来
 * - openAdd(): 自动 resetFields + 打开
 * - openEdit(record): 自动 setFieldsValue(映射) + 打开
 *
 * 可选参数：
 * - mapRecordToForm(record): 自定义“编辑时 record -> 表单值”的映射
 */

export const useFormCrudModal = (options = {}) => {
    const {mapRecordToForm} = options

    const crudModal = useCrudModal();

    const [form] = Form.useForm();

    const openAdd = useCallback(() => {
        form.resetFields();
        crudModal.openAdd();
    }, [form, crudModal]);

    const openEdit = useCallback((record) => {
        const values = mapRecordToForm
            ? mapRecordToForm(record)
            : {
                ...record,
                created: record?.created ? dayjs(record.created) : null,
            };

        form.setFieldsValue(values);
        crudModal.openEdit(record);

    }, [crudModal, form, mapRecordToForm]);

    return {
        ...crudModal, // open, modalType, record, close ...
        form,
        openAdd,
        openEdit,
    };
}
