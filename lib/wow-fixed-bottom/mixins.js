import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_fixed_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
