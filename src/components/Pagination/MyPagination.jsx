import {Pagination} from "antd";

function MyPagination({total, current, pageSize, onChange}) {
    return (
        <Pagination
            total={total}
            current={current}        // ✅ 受控
            pageSize={pageSize}      // ✅ 受控
            showSizeChanger
            showQuickJumper
            showTotal={t => `Total ${t} items`}
            onChange={onChange}      // ✅ 只通知，不管状态
        />
    );
}

export default MyPagination;
