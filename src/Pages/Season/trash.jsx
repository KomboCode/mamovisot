import Series from '../../Data/Series';




import Series from '../../Data/Series';

const Season = () => {
    return (
        <div>
            {Series.map((item) => {
                const { id, title, season, photo } = item;

                return (
                    <div>
                        <h3>{title}</h3>
                        <img src={photo} width="200px"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Season;






const Season = () => {
    return (
        <div>
            {Series.map((item) => {
                const { id, title, season } = item;

                return (
                    <div>
                        <h3>{title}</h3>
                        <div>{season.map((epic) => {
                            const { id, title, episods } = epic;
                            return (
                                <div>
                                    <h3>{title}</h3>
                                    <div>
                                        { episods.map((ite) => {
                                            const {url } = ite;
                                            return (
                                                <div>
                                                    <h3>{url}</h3>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Season;