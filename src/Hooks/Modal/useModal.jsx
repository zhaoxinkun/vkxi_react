import {useState, useCallback} from "react";

/*
* 自定义hook,用于管理modal的显示与隐藏
* ❗ 只管理一个布尔状态
* 不知道表单
* 不知道提交
* 不知道业务
* 就像一个“开关”
* */
export function useModal() {
    const [open, setOpen] = useState(false);
    const show = useCallback(() => setOpen(true), []);
    const hide = useCallback(() => setOpen(false), []);

    return {
        open,
        show,
        hide,
    };
}
