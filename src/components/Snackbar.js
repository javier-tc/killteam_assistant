import * as React from 'react';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function AutohideSnackbar({ message, show }) {

    const [state, setState] = React.useState({
        open: false,
        Transition: SlideTransition,
    });


    React.useEffect(() => {
        if (show) {
            setState({
                ...state,
                open: true,
            });
        }
    }, [show]);

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <div>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message={message}
                key={state.Transition.name}
                autoHideDuration={1200}
            />
           {console.log(state.open)}
        </div>
    );
}

export { AutohideSnackbar };