import Options from './Options';
import { connect } from 'react-redux';
import { selectedOptionsListSelector } from './options.selectors';
import { toggleOption } from "./options.actions";


const mapState = state => {
    return {
        options: selectedOptionsListSelector(state)
    }
}
const mapDispatch = {
    moveOption: toggleOption,
}



export default connect(mapState, mapDispatch)(Options);
