function HomeModel({list}) {
    return (
        <div className="module-box">

            {
                list.map((item) =>
                    <div className="box" key={item.id}>
                        <div className="list-box">
                            <i>{item.icon}</i>
                            <p>{item.content}</p>
                        </div>

                    </div>
                )
            }
        </div>

    )

}

export default HomeModel;