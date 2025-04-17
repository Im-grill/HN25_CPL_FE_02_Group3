function BuyingInfo() {
    return (
        <div className="bg-white rounded-md shadow-sm p-4 mt-4">
            <h2 className="text-lg font-medium mb-4">An tâm mua sắm</h2>
            <div className="space-y-3">
                <div className="flex items-start border-b border-gray-200 pb-2">
                    <img src="https://salt.tikicdn.com/ts/upload/c5/37/ee/76c708d43e377343e82baee8a0340297.png" alt="compensation-icon" height="20" width="20" />
                    <div className="text-sm ml-2">Được đồng kiểm khi nhận hàng</div>
                </div>
                <div className="flex items-start border-b border-gray-200 pb-2">
                    <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/ea/02/b4/b024e431ec433e6c85d4734aaf35bd65.png" height="20" width="20" />
                    <div className="text-sm ml-2">Được hoàn tiền 200% nếu là hàng giả</div>
                </div>
                <div className="flex items-start border-b border-gray-200 pb-2">
                    <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/d8/c7/a5/1cd5bd2f27f9bd74b2c340b8e27c4d82.png" height="20" width="20" />
                    <div className="text-sm ml-2">
                        Đổi trả miễn phí trong 30 ngày. Được đổi ý.
                        <div className="underline font-bold">
                            <a href="http://">Chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyingInfo;