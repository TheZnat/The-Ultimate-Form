import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    root: {
        fontFamily: "Montserrat",
        margin: theme.spacing(3, 0, 2),
        textAlign: 'center',
        fontSize: "40px",
        color: "#2b2c96",
        textShadow: "1px 1px dark",
    }
}))

const Header = () => {
    const styles = useStyles()

    return (
        <Typography
            className={styles.root}
            variant="h5"
            component="h1"
        >
            The Ultimate Form
        </Typography>
    );
};

export default Header;