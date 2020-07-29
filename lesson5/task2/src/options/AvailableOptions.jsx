import Options from './Options';
import { connect } from 'react-redux';
import { avaliableOptionsListSelector } from './options.selectors';
import { toggleOption } from "./options.actions";


const mapState = state => {
    return {
        options: avaliableOptionsListSelector(state)
    }
}
const mapDispatch = {
    moveOption: toggleOption,
}

export default connect(mapState, mapDispatch)(Options);
