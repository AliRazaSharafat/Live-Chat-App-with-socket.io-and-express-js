import React, { useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CTX } from './Store';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid black'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '10px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    },
}))

const Dashboard = () => {
    const [textValue, changeTextValue] = useState('');
    const [allChats] = useContext(CTX);
    // console.log(allChats);
    const topics = Object.keys(allChats);
    const [activeTopics, changeActiveTopics] = useState(topics[0]);
    // console.log(topics);
    // console.log(textValue);

    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h4' component='h4'>
                    Chat App
                </Typography>
                <Typography variant='h5' component='h5'>
                    {activeTopics}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicWindow}>
                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={e => changeActiveTopics(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopics].map((chat, i) => (
                                <div key={i} className={classes.flex} style={{ padding: '2px' }}>
                                    <Chip label={chat.from} />
                                    <Typography>{chat.msg}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField label="Send a chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button variant="contained" className={classes.button} color="primary">Send</Button>
                </div>
            </Paper>
        </div>
    )
}

export default Dashboard;